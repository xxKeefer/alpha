module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 100,
  useTabs: false,
  overrides: [
    {
      files: 'README.md',
      options: {
        parser: 'markdown',
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        htmlWhitespaceSensitivity: 'css',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 4,
        trailingComma: 'none',
        useTabs: false
      }
    }
  ]
}
