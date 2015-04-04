// be careful of href links

skel.init({
    reset: 'full',
    breakpoints: {
        large: {
            media: '(min-width: 1025px)',
            href: 'css/responsive/style-large.css',
            containers: '95%',
            grid: { gutters: ['1.75em', '1.75em',] }
        },
        medium: {
            media: '(min-width: 769px) and (max-width: 1024px)',
            href: 'css/responsive/style-medium.css',
            containers: '90%',
            grid: { gutters: ['1.55em', '1.55em',] }
        },
        small: {
            media: '(max-width: 768px)',
            href: 'css/responsive/style-small.css',
            containers: '100%',
            grid: { gutters: ['1.25em', '1.25em',] }
        },
        xsmall: {
          media: '(max-width: 480px)',
          href: 'css/responsive/style-xsmall.css',
          containers: '100%',
          grid: { gutters: ['0', '0',] }
        }
    }
});

