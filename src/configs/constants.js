//SYSTEM
export const CHECK_CRSF_TOKEN = false;
export const USE_SSL = process.env.NEXTAUTH_URL.startsWith( "https://" );
export const COOKIE_CSRF_KEY = `${ USE_SSL ? "__Host-" : "" }next-auth.csrf-token`;
export const COOKIE_SESSION_KEY = `${ USE_SSL ? "__Secure-" : "" }next-auth.session-token`;
// Layout and colors CONSTANTS
export const LIGHT_THEME = "LIGHT_THEME";
export const DARK_THEME = "DARK_THEME";
export const THEME_COLOR = "THEME_COLOR";
export const NAVBAR_BG = "NAVBAR_BG";
export const SIDEBAR_BG = "SIDEBAR_BG";
export const DIRECTION = "DIRECTION";
export const BLUE_THEME = "BLUE_THEME";
export const GREEN_THEME = "GREEN_THEME";
export const RED_THEME = "RED_THEME";
export const BLACK_THEME = "BLACK_THEME";
export const PURPLE_THEME = "PURPLE_THEME";
export const INDIGO_THEME = "INDIGO_THEME";
export const ORANGE_THEME = "ORANGE_THEME";
export const CARHARA_THEME = 'CARHARA_THEME';
export const CAKE_THEME = 'CAKE_THEME';
// CHAT CONSTANTS
export const FETCH_CHAT_SUCCESS = "FETCH_CHAT_SUCCESS";
export const SELECTED_CHAT = "SELECTED_CHAT";
export const SEARCH_USER = "SEARCH_USER";
export const MSG_SUBMIT = "MSG_SUBMIT";

// NOTES CONSTANTS
export const SELECTED_NOTES = "SELECTED_NOTES";
export const SEARCH_NOTES = "SEARCH_NOTES";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";

// EMAIL CONSTANTS
export const STAR_EMAIL = "STAR_EMAIL";
export const IMPORTANT_EMAIL = "IMPORTANT_EMAIL";
export const OPEN_EMAIL = "OPEN_EMAIL";
export const TRASH_EMAIL = "TRASH_EMAIL";
export const ASSIGN_FOLDER = "ASSIGN_FOLDER";
export const ASSIGN_LABEL = "ASSIGN_LABEL";
export const SET_SELECTED_EMAIL = "SET_SELECTED_EMAIL";
export const FILTER_EMAIL = "FILTER_EMAIL";
export const SET_EMAIL_VISIBILITY_FILTER = "SET_EMAIL_VISIBILITY_FILTER";

// ADMIN PANEL
export const DEARLER_THEME = 'DEARLER_THEME';
export const ROWS_PER_PAGE = 10;
export const ROWS_PER_PAGE_OPTION = [ ...Array( 10 ) ].map( ( _, i ) => ( i * 5 ) + 5 );
export const DEFAULT_FIELDS_CONTENT = {
    pages: 'id, name, slug, status, featured, created',
    posts: 'id, name, slug, excerpt, status, image, created'
};

export const DEFAULT_FIELDS_TAXONOMY = {
    categories: 'id, name, slug, description, status, featured, created'
};

export const DEFAULT_FIELDS_USER = 'id, avatar, last_name, username, email, phone, enabled, created';

export const DEFAULT_FIELDS_EMAIL_LOG = 'id, title, email, is_send, opened, link_clicked, created, modified';

export const DEFAULT_FIELDS_EMAIL_TEMPLATE = 'id, title, subject, to, status';

export const DEFAULT_FIELDS_EMAIL_TYPE = 'id, name, slug, params, created';

export const DEFAULT_FIELDS_ROLE = 'id, name, slug, is_admin, created, modified';

export const DEFAULT_FIELDS_CONTENT_TYPES = 'id, icon, name, slug, description, is_term, term_multiple, show_menu';

export const DEFAULT_FIELDS_TAXONOMIES = 'id, name, slug, description, created';

export const DEFAULT_FIELDS_NOTIFIES = 'id, type, key, message';

export const DEFAULT_FIELDS_METAS = 'id, name, defaultvalue, type, options, status';

export const DEFAULT_FIELDS_CUSTOMER = 'id, first_name, last_name, email, phone, enabled, created';

export const OPTIONS_STATUS = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '0' },
];

export const OPTIONS_STATUS_ISLOGIN = [
    { label: 'Yes', value: '1' },
    { label: 'No', value: '0' },
];
export const OPTIONS_MENUS = [
    { label: 'sử dụng ', value: 'sử dụng' },
    { label: 'Không sử dụng', value: 'Không sử dụng' },
];
export const OPTIONS_CHECBOX = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];
export const OPTIONS_SELECT = [
    { value: 'Default', label: "Default" },
    { value: '2-cols-right', label: "2 cols right" },
    { value: '2-cols', label: "2 cols" },
    { value: 'basic', label: "basic" },
    { value: 'error', label: "error" },
];
export const OPTIONS_YEARS = [
    { label: "1990" },
    { label: "2000" },
    { label: "2001" },
    { label: "2005" },
    { label: "2006" },
    { label: "2010" },
];
export const OPTIONS_SELECT_MENUS = [
    { value: 'ĐỘ RỘNG', label: "ĐỘ RỘNG" },
    { value: 'Rộng 100%', label: "Rộng 100%" },
    { value: 'Rộng 80%', label: "Rộng 80%" },
    { value: 'Rộng 60%', label: "Rộng 60%" },
    { value: 'Rộng 50%', label: "Rộng 50%" },
    { value: 'Rộng 40%', label: "Rộng 40%" },
    { value: 'Rộng 10%', label: "Rộng 10%" },
];

// KEY Google ReCaptcha
export const KEY_GOOGLE_RECAPTCHA = '6LdpREQnAAAAAFAdc4TuSRPA1ZJJmd0FCvZN9nG2';

export const API_ADMIN_URL = 'https://admin.hannahsweetcakes.com';

export const LoaderImage = ( { src, width, quality } ) => {
    return src;
};