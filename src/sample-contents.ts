import sampleImage from 'img/sample.jpg'

const title = 'This is a title. Just Single Line String. Not Styleable.';

const subtitle = [
    'This is a subtitle. Multi Line String. Not Styleable.',
    'just use "\\n" character'
].join('\n')

const body = [
    {
        T: 'I',
        src: sampleImage,
        caption: 'This is a Image Row. Caption Supported',
        originWidth: 400,
        originHeight: 400,
        S: {
            float: 'left',
            width: 400,
            height: 400,
        }
    },
    'This is a paragraph. Informality expression for simple paragraph.',
    {
        T: 'P',
        F: [
            'This is a paragraph too. Same as above. but, Formality expression. (see sample-contents.ts)'
        ]
    },
    {
        T: 'P',
        S: {
            clear: 'both'
        },
        F: [
            'In This Row Content, Key name ',
            {
                V: '"T"',
                S: {
                    fontWeight: 'bold'
                }
            },
            ' means "Type". The Value ',
            {
                V: '"T"',
                S: {
                    fontWeight: 'bold'
                }
            },
            ' means "Text".'
        ]
    },
    {
        T: 'P',
        F: [
            'Key name ',
            {
                V: '"F"',
                S: {
                    fontWeight: 'bold'
                }
            },
            ' means "Fragments". These are separated by changes in the properties of the text.'
        ]
    },
    '\n',
    '"Fragment" also can have T(ype) key.',
    'If "Fragment" does not have a T(ype) key, it is considered a Plane Fragment.',
    {
        T: 'P',
        F: [
            'If "Fragment" has a T key, then it can plays a specified role according to the T Value. Such as ',
            {
                T: 'L',
                V: 'Link',
                url: '#'
            },
            '.'
        ]
    },
    '\n',
    'There is various row type. And you can make custom row type, or use custom row library.',
    {
        T: 'youtube',
        id: 'jNQXAC9IVRw'
    },
    {
        T: 'hr'
    },
    {
        T: 'iframe',
        V: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
        T: 'hr',
        className: 'hr-gap'
    },
    {
        T: 'textBox',
        V: 'Text Box Variation',
        className: 'textBox-codeBlock'
    },
    {
        T: 'hr',
        className: 'hr-double'
    },
    {
        T: 'textBox',
        V: 'Text Box Variation',
        className: 'textBox-blockQuote'
    }
]

const editorContents: EditorContents = new Map().set('title', title).set('subtitle', subtitle).set('body', body)
export default editorContents

