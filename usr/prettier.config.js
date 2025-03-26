module.exports = {
  ignorePath: '.prettierignore',
  plugins: [],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx,json}'],
      options: {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    },
  ],
};
