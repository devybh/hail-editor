import AbstractCommonClass from '../Abstracts/AbstractCommonClass'

type ContentsConvertorProps = PropsOf<AbstractCommonClass> & {}

export default class ContentsConvertor extends AbstractCommonClass {
  constructor(public props: ContentsConvertorProps) {
    super(props)
  }

  compress<UnknownRow extends AbstractProps.AbstractRow>(
    rowProps: UnknownRow[]
  ): Contents.UnknownCompressedContents {
    return []
  }

  decompress<UnknownRow extends AbstractProps.AbstractRow>(
    compressedContents: Contents.UnknownCompressedContents
  ): UnknownRow[] {
    // compressedContents.map((compressedContent) => {
    //   if (isString(compressedContent)) {
    //
    //   } else {
    //
    //   }
    // })
    return []
  }

  parseHtml(htmlString: any) {}
}
