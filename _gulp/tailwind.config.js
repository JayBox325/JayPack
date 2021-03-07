import environments from 'gulp-environments'
import config from './config'
import colors from 'tailwindcss/colors'

var production = environments.production

const env = production() ? 'production' : 'development'
const isProd = env === 'production'

if (config.framework == 'nunjucks') {
    tailwindPurgeTemplates = `${config.distRoot}/**/*.html`
} else if (config.framework == 'craft') {
    tailwindPurgeTemplates = `${config.distRoot}/**/*.twig`
} else if (config.framework == 'shopify') {
    tailwindPurgeTemplates = `${config.distRoot}/**/*.liquid`
}

module.exports = {
    purge: {
        enabled: isProd ? true : false,
        content: [tailwindPurgeTemplates]
    },
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                sm: '400px',
                md: '600px',
                lg: '900px',
                xl: '1200px',
                '2xl': '1600px'
            },
            fontSize: {
                xs: '0.75rem',      // 12px
                sm: '0.875rem',     // 14px
                base: '1rem',       //  6px
                lg: '1.125rem',     // 18px
                xl: '1.25rem',      // 20px
                '2xl': '1.5rem',    // 24px
                '3xl': '1.875rem',  // 30px
                '4xl': '2.25rem',   // 36px
                '5xl': '3rem',      // 48px
                '6xl': '3.75rem',   // 60px
                '7xl': '4.5rem',    // 72px
                '8xl': '6rem',      // 96px
                '9xl': '8rem',      // 128px
            },
            spacing: {
                px: '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '40': '10rem',
                '48': '12rem',
                '56': '14rem',
                '64': '16rem',
                '72': '18rem',
                '80': '20rem',
                '88': '26rem',
                '96': '32rem',
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
                'full': '100%'
            },
            colors: {
                // Tailwind themes
                white: colors.white,
                black: colors.black,
                gray: colors.trueGray,
                blue: colors.blue,
                indigo: colors.indigo,
                red: colors.red,
                yellow: colors.amber,
                green: colors.emerald,
                purple: colors.violet,
                pink: colors.pink,

                // Project colours - https://javisperez.github.io/tailwindcolorshades/#/

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
            },
            transitionTimingFunction: {
                'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
                'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
                'in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)'
            },
            transitionProperty: {
                'width': 'width'
            }
        },
    },
    variants: {
        translate: ['group-hover'],
    },
    plugins: [
        function({ addBase, theme }) {
            function extractColorVars(colorObj, colorGroup = '') {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey]
        
                    const newVars = typeof value === 'string' ? {[`--color${colorGroup}-${colorKey}`]: value} : extractColorVars(value, `-${colorKey}`)
        
                    return { ...vars, ...newVars }
                }, {})
            }
      
            addBase({
                ':root': extractColorVars(theme('colors')),
            })
        },
    ],
}