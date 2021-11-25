var termynal = new Termynal('#termynal', {
    lineData: [
        { type: 'input', value: 'python' },
        { value: 'Are you sure you want to install \'spaCy\'?' },
        { type: 'input',  typeDelay: 1000, prompt: '(y/n)', value: 'y' },
        { delay: 1000, value: 'Installing spaCy...' }
    ]
});