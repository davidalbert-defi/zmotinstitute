export const state = () => ({
  telInputOption: {
    mode: 'international',
    defaultCountry: '',
    disabledFetchingCountry: false,
    disabled: false,
    disabledFormatting: false,
    required: true,
    validCharactersOnly: true,
    enabledCountryCode: false,
    enabledFlags: true,
    preferredCountries: [],
    onlyCountries: [],
    ignoredCountries: [],
    autocomplete: 'off',
    name: 'telephone',
    maxLen: 25,
    wrapperClasses: '',
    inputClasses: '',
    dropdownOptions: {
      disabledDialCode: false
    },
    inputOptions: {
      showDialCode: false
    }
  }
})

export const getters = {
  telInputOption: state => state.telInputOption
}
