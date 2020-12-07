module.exports = {
  purge: {
    mode: 'layers'
  },
  theme: {
    extend: {
      padding: {
        '15sm': '0.375rem',
        34: '8.5rem',
        '45vh': '45vh'
      },
      fontSize: {
        '13xl': '1.3rem',
        '51xl': '3.2rem',
        '55xl': '3.5rem',
        '45xl': '2.625rem',
        '44xl': '2.5rem'
      },
      height: {
        '125px': '3.125rem'
      },
      minHeight: {
        80: '80vh'
      },
      zIndex: {
        100: '100'
      },
      colors: {
        // Configure your color palette here
        primary: '#fc642e',
        mpurple: '#6c38f8'
      }
    }
  }
}
