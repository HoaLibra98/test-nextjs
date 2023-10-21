export const settingFont = {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    percentToPx: 0.16,
};

const LetterSpacing = ( percent ) => {
    return `${ percent * settingFont.percentToPx }px`;
};

export const TextStyles = {
    JosefinSans: {
        "SubBody:16px": {
            Regular: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.regular,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.bold,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            },
            Light: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.light,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            }
        },
        "SubBody:14px": {
            Regular: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.regular,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.bold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            },
            Light: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.light,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            }
        },
        // remove
        "subBody:20px": {
            Regular: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.regular,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.bold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            },
            Light: {
                fontFamily: "'Josefin Sans'",
                fontWeight: settingFont.light,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 )
            }
        }
    },
    Domine: {
        "H1:65px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 65,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 65,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H2:48px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 48,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 48,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        // remove
        "H2:40px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 40,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 40,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H2:36px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 36,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 36,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
        },
        "H2:30px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
        },
        "H3:40px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 40,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 40,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        // remove
        "H3:25px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 25,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 25,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H4:32px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 32,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 32,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        // remove
        "H4:23px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 23,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 23,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H5:23px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 23,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 23,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        // remove
        "H5:20px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "H6:16px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
        },
        // remove
        "H6:14px": {
            Regular: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.regular,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Bold: {
                fontFamily: "'Domine'",
                fontWeight: settingFont.bold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
        },
    },
    Poppins: {
        "Body01:24px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 24,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 24,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 24,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 24,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 24,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        // remove
        "Body01:30px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 30,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body02:20px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 20,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body03:16px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 16,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },

        "Body03:18px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 18,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body04:14px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 14,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body05:12px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 12,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 12,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 12,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 12,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 12,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
        "Body06:10px": {
            Bold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.bold,
                fontSize: 10,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            SemiBold: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.semiBold,
                fontSize: 10,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Medium: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.medium,
                fontSize: 10,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Regular: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.regular,
                fontSize: 10,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            },
            Light: {
                fontFamily: "'Poppins'",
                fontWeight: settingFont.light,
                fontSize: 10,
                lineHeight: "155%",
                letterSpacing: LetterSpacing( 1.8 ),
            }
        },
    }
};