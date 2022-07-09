export default class HailEditor {

    constructor(private props: { element: Element }) {
        console.log(this.props.element);
        const shadow = this.props.element.attachShadow({mode: 'closed'})
        shadow.appendChild(Object.assign(document.createElement('div'), {
            innerText: '테스트',
        }))
    }


    setContents(contents: EditorContents){
        (Object.values(contents) as FieldValue[]).map(rows => {
            if (typeof rows === 'string') {

            }else {
                rows.forEach(row => {
                    if (typeof row === 'string') {

                    } else {

                    }
                })
            }
        })
    }

}
