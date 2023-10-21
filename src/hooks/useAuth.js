import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth( shouldRedirect ) {
    // Sử dụng hook useSession của next-auth để lấy session hiện tại của người dùng
    const session = useSession();
    // Sử dụng hook useRouter của Next.js để lấy thông tin đường dẫn hiện tại và định tuyến đến các trang khác
    const router = useRouter();
    // Sử dụng state để lưu trạng thái xác thực của người dùng (true nếu đã xác thực và false nếu chưa xác thực)
    const [ isAuthenticated, setIsAuthenticated ] = useState( false );

    useEffect( () => {
        // Kiểm tra xem có lỗi "RefreshAccessTokenError" trong session không, nếu có thì đăng xuất người dùng và định tuyến đến trang "/login" với redirect option nếu được cung cấp
        if ( session?.error === "RefreshAccessTokenError" ) {
            signOut( { callbackUrl: "/login", redirect: shouldRedirect } );
        }

        // Kiểm tra xem session có bị undefined không, nếu có thì định tuyến đến trang "/login" nếu đường dẫn hiện tại là "/login" và đánh dấu người dùng chưa xác thực
        if ( session === undefined ) {
            if ( router.route === "/" ) {
                router.replace( "/" );
            }
            setIsAuthenticated( false );
        } else if ( session.status === "authenticated" ) {
            // Nếu session đã được xác thực, kiểm tra xem người dùng có role là "admin" hay không
            const userRole = session.data?.user?.role?.slug || "user"; // Lấy role của user nếu có, nếu không có thì mặc định là user
            if ( userRole === "admin" ) {
                // Nếu user có role là admin, định tuyến đến trang "/admin"
                router.replace( "/admin" );
            } else {
                // Nếu user không phải là admin, đánh dấu người dùng đã được xác thực và trả về giá trị true
                setIsAuthenticated( true );
                router.replace( "/my-account" );
            }
        }
    }, [ session, router, shouldRedirect ] );

    // Trả về giá trị của isAuthenticated để sử dụng trong các component khác
    return isAuthenticated;
}