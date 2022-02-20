import environments from 'gulp-environments'
import config from './_gulp/_config/_index.js'
import colors from 'tailwindcss/colors'

var production = environments.production

let tailwindPurgeTemplates
const env = production() ? 'production' : 'development'
const isProd = env === 'production'

switch (config.framework) {
    case 'static':
        tailwindPurgeTemplates = `${config.distRoot}/**/*.html`
        break;

    case 'craft':
        tailwindPurgeTemplates = `${config.distRoot}/**/*.twig`
        break;

    case 'shopify':
        tailwindPurgeTemplates = `${config.distRoot}/**/*.liquid`
        break;

    default:
        break;
}

module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: ['fill-current', 'gap-2', 'items-center'],
    theme: {
        extend: {
            screens: {
                sm: '400px',
                md: '600px',
                lg: '900px',
                xl: '1200px',
                '2xl': '1600px',
            },

            fontFamily: {
                display: ['rinseheadline', 'impact', 'sans-serif'],
                sans: ['Moderat-Regular', 'sans-serif'],
                bold: ['Moderat-Bold', 'sans-serif'],
                light: ['Moderat-light', 'sans-serif'],
            },

            gridTemplateColumns: {
                24: 'repeat(24, minmax(0, 1fr))',
            },

            gridColumn: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
                'span-24': 'span 24 / span 24',
            },

            lineHeight: {
                display: '0.85',
            },

            colors: {
                'true-black': '#000000',
                black: '#231f20',
                white: '#ffffff',

                // Social media where 500 is default brand color
                facebook: {
                    50: '#F5F7FA',
                    100: '#EBEEF5',
                    200: '#CED6E5',
                    300: '#B1BDD6',
                    400: '#768BB7',
                    500: '#3B5998',
                    600: '#355089',
                    700: '#23355B',
                    800: '#1B2844',
                    900: '#121B2E',
                },
                twitter: {
                    50: '#F4FAFE',
                    100: '#E8F6FE',
                    200: '#C7E8FC',
                    300: '#A5D9FA',
                    400: '#61BDF6',
                    500: '#1DA1F2',
                    600: '#1A91DA',
                    700: '#116191',
                    800: '#0D486D',
                    900: '#093049',
                },
                pinterest: {
                    50: '#FCF3F4',
                    100: '#F8E6E8',
                    200: '#EFC1C6',
                    300: '#E59CA4',
                    400: '#D15260',
                    500: '#BD081C',
                    600: '#AA0719',
                    700: '#710511',
                    800: '#55040D',
                    900: '#390208',
                },
                instagram: {
                    50: '#FCF5F9',
                    100: '#F9EBF3',
                    200: '#F0CDE0',
                    300: '#E6AECE',
                    400: '#D472A9',
                    500: '#C13584',
                    600: '#AE3077',
                    700: '#74204F',
                    800: '#57183B',
                    900: '#3A1028',
                },
                linkedin: {
                    50: '#F2F8FB',
                    100: '#E6F1F8',
                    200: '#BFDDED',
                    300: '#99C9E1',
                    400: '#4DA0CB',
                    500: '#0077B5',
                    600: '#006BA3',
                    700: '#00476D',
                    800: '#003651',
                    900: '#002436',
                },
                soundcloud: {
                    50: '#FFF3E5',
                    100: '#FFE7CC',
                    200: '#FFCF99',
                    300: '#FFB866',
                    400: '#FFA033',
                    500: '#FF8800',
                    600: '#CC6D00',
                    700: '#995200',
                    800: '#663600',
                    900: '#331B00',
                },
                spotify: {
                    50: '#4feb86',
                    100: '#45e17c',
                    200: '#3bd772',
                    300: '#31cd68',
                    400: '#27c35e',
                    500: '#1db954',
                    600: '#13af4a',
                    700: '#09a540',
                    800: '#009b36',
                    900: '#00912c',
                },
                youtube: {
                    50: '#FFE5E5',
                    100: '#FFCCCC',
                    200: '#FF9999',
                    300: '#FF6666',
                    400: '#FF3333',
                    500: '#FF0000',
                    600: '#CC0000',
                    700: '#990000',
                    800: '#660000',
                    900: '#330000',
                },
            },

            // Calculate REM sizes to match design: https://nekocalc.com/px-to-rem-converter
            fontSize: {
                xxs: '0.688rem', // 11px
                xs: '0.75rem', // 12px
                sm: '0.875rem', // 14px
                base: '1rem', // 16px
                lg: '1.125rem', // 18px
                xl: '1.25rem', // 20px
                '2xl': '1.375rem', // 22px
                '3xl': '1.5rem', // 24px
                '4xl': '1.875rem', // 30px
                '5xl': '2.25rem', // 36px
                '6xl': '3rem', // 48px
                '7xl': '3.75rem', // 60px
                '8xl': '4.5rem', // 72px
                '9xl': '6rem', // 96px
                '10xl': '8rem', // 128px
            },

            spacing: {
                '1/2': '50%',
                '1/3': '33.33333%',
                '2/3': '66.66667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.66667%',
                '2/6': '33.33333%',
                '3/6': '50%',
                '4/6': '66.66667%',
                '5/6': '83.33333%',
                '1/12': '8.33333%',
                '2/12': '16.66667%',
                '3/12': '25%',
                '4/12': '33.33333%',
                '5/12': '41.66667%',
                '6/12': '50%',
                '7/12': '58.33333%',
                '8/12': '66.66667%',
                '9/12': '75%',
                '10/12': '83.33333%',
                '11/12': '91.66667%',
                full: '100%',
                'screen-80': '80vh',
            },

            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
        },
    },
    variants: {
        extend: {
            borderWidth: ['first'],
            height: ['group-hover'],
            backgroundColor: ['first', 'odd', 'even'],
        },
    },
};
