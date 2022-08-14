import 'hail-editor/Types/AbstractProps'
import sampleImage from './images/sample.png'

export const title = 'This is a title. Just Single Line String. Not Styleable.'
export const subtitle = [
  'This is a subtitle. Multi Line String. Not Styleable.',
  'just use "\\n" character'
].join('\n')

export const body = [
  {
    type: 'Image',
    src: sampleImage,
    caption: 'This is a Image Row. Caption Supported',
    originWidth: 400,
    originHeight: 400,
    style: {
      float: 'left',
      width: 400,
      height: 400
    }
  },
  'This is a paragraph. Informality expression for simple paragraph.',
  {
    type: 'Paragraph',
    chars: [
      'This is a paragraph too. Same as above. but, Formality expression. (see sampleContents.ts)'
    ]
  },
  {
    type: 'Paragraph',
    style: {
      clear: 'both'
    },
    chars: [
      'In This Row Content, Key name ',
      {
        value: '"T"',
        style: {
          fontWeight: 'bold'
        }
      },
      ' means "Type". The Value ',
      {
        value: '"T"',
        style: {
          fontWeight: 'bold'
        }
      },
      ' means "Text".'
    ]
  },
  {
    type: 'Paragraph',
    chars: [
      'Key name ',
      {
        value: '"F"',
        style: {
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
    type: 'Paragraph',
    chars: [
      'If "Fragment" has a T key, then it can plays a specified role according to the T Value. Such as ',
      {
        type: 'Link',
        value: 'Link',
        url: '#'
      },
      '.'
    ]
  },
  '\n',
  'There is various row type. And you can make custom row type, or use custom row library.',
  {
    type: 'Youtube',
    id: 'jNQXAC9IVRw'
  },
  {
    type: 'Hr'
  },
  {
    type: 'Code',
    value:
      '<iframe width="560" height="315" public="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    type: 'Hr',
    className: 'hr-gap'
  },
  {
    type: 'TextBox',
    value: 'Text Box Variation',
    className: 'textBox-codeBlock'
  },
  {
    type: 'Hr',
    className: 'hr-double'
  },
  {
    type: 'TextBox',
    value: 'Text Box Variation',
    className: 'textBox-blockQuote'
  }
]
