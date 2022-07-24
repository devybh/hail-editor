export function stringToParagraphs(string: string) {
    return string.split('\n').map(line =>
        ({
            T: 'P',
            C: line.split('').map(char =>
                ({
                    T: 'P',
                    V: char
                }) as Char.Plain
            )
        }) as RowContents.Paragraph
    )
}
