
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #FFB100 
		"--color-primary-50": "255 243 217", // #fff3d9
		"--color-primary-100": "255 239 204", // #ffefcc
		"--color-primary-200": "255 236 191", // #ffecbf
		"--color-primary-300": "255 224 153", // #ffe099
		"--color-primary-400": "255 200 77", // #ffc84d
		"--color-primary-500": "255 177 0", // #FFB100
		"--color-primary-600": "230 159 0", // #e69f00
		"--color-primary-700": "191 133 0", // #bf8500
		"--color-primary-800": "153 106 0", // #996a00
		"--color-primary-900": "125 87 0", // #7d5700
		// secondary | #5C4898 
		"--color-secondary-50": "231 228 240", // #e7e4f0
		"--color-secondary-100": "222 218 234", // #dedaea
		"--color-secondary-200": "214 209 229", // #d6d1e5
		"--color-secondary-300": "190 182 214", // #beb6d6
		"--color-secondary-400": "141 127 183", // #8d7fb7
		"--color-secondary-500": "92 72 152", // #5C4898
		"--color-secondary-600": "83 65 137", // #534189
		"--color-secondary-700": "69 54 114", // #453672
		"--color-secondary-800": "55 43 91", // #372b5b
		"--color-secondary-900": "45 35 74", // #2d234a
		// tertiary | #88CA60 
		"--color-tertiary-50": "237 247 231", // #edf7e7
		"--color-tertiary-100": "231 244 223", // #e7f4df
		"--color-tertiary-200": "225 242 215", // #e1f2d7
		"--color-tertiary-300": "207 234 191", // #cfeabf
		"--color-tertiary-400": "172 218 144", // #acda90
		"--color-tertiary-500": "136 202 96", // #88CA60
		"--color-tertiary-600": "122 182 86", // #7ab656
		"--color-tertiary-700": "102 152 72", // #669848
		"--color-tertiary-800": "82 121 58", // #52793a
		"--color-tertiary-900": "67 99 47", // #43632f
		// success | #FF6400 
		"--color-success-50": "255 232 217", // #ffe8d9
		"--color-success-100": "255 224 204", // #ffe0cc
		"--color-success-200": "255 216 191", // #ffd8bf
		"--color-success-300": "255 193 153", // #ffc199
		"--color-success-400": "255 147 77", // #ff934d
		"--color-success-500": "255 100 0", // #FF6400
		"--color-success-600": "230 90 0", // #e65a00
		"--color-success-700": "191 75 0", // #bf4b00
		"--color-success-800": "153 60 0", // #993c00
		"--color-success-900": "125 49 0", // #7d3100
		// warning | #4F46E5 
		"--color-warning-50": "229 227 251", // #e5e3fb
		"--color-warning-100": "220 218 250", // #dcdafa
		"--color-warning-200": "211 209 249", // #d3d1f9
		"--color-warning-300": "185 181 245", // #b9b5f5
		"--color-warning-400": "132 126 237", // #847eed
		"--color-warning-500": "79 70 229", // #4F46E5
		"--color-warning-600": "71 63 206", // #473fce
		"--color-warning-700": "59 53 172", // #3b35ac
		"--color-warning-800": "47 42 137", // #2f2a89
		"--color-warning-900": "39 34 112", // #272270
		// error | #F76E6E 
		"--color-error-50": "254 233 233", // #fee9e9
		"--color-error-100": "253 226 226", // #fde2e2
		"--color-error-200": "253 219 219", // #fddbdb
		"--color-error-300": "252 197 197", // #fcc5c5
		"--color-error-400": "249 154 154", // #f99a9a
		"--color-error-500": "247 110 110", // #F76E6E
		"--color-error-600": "222 99 99", // #de6363
		"--color-error-700": "185 83 83", // #b95353
		"--color-error-800": "148 66 66", // #944242
		"--color-error-900": "121 54 54", // #793636
		// surface | #282828 
		"--color-surface-50": "223 223 223", // #dfdfdf
		"--color-surface-100": "212 212 212", // #d4d4d4
		"--color-surface-200": "201 201 201", // #c9c9c9
		"--color-surface-300": "169 169 169", // #a9a9a9
		"--color-surface-400": "105 105 105", // #696969
		"--color-surface-500": "40 40 40", // #282828
		"--color-surface-600": "36 36 36", // #242424
		"--color-surface-700": "30 30 30", // #1e1e1e
		"--color-surface-800": "24 24 24", // #181818
		"--color-surface-900": "20 20 20", // #141414
		
	}
}