var termynal = new Termynal('#termynal',
    {
        lineData: [
            { value: 'python' },
            { value: '>>> import meight' },
            { type: 'input',  typeDelay: 1000, prompt: '(y/n)', value: 'y' },
            { delay: 1000, value: 'Installing spaCy...' }
        ]
    }
)