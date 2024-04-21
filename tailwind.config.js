/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // 兼容小程序，将 : 替换成 __
  separator: '__',
  theme: {
    // 兼容小程序，将默认配置里带 .和/ 清除

    // 字体颜色
    colors: {
      3: '#333',
      4: '#444',
      5: '#555',
      6: '#666',
      7: '#777',
      8: '#888',
      9: '#999',
      primary: '#3c9cff',
      e: '#eee',
      cell: '#e7f2f9',
      gap: '#cbd5e1',
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // 兼容小程序，将带有 * 选择器的插件禁用
    preflight: false,
    space: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
  },
}
