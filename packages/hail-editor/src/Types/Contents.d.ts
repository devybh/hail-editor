namespace Contents {
  type UnknownCompressedContents = UnknownCompressedContent[]
  type UnknownCompressedContent = string | UnknownCompressedObject
  type UnknownCompressedObject = Record<string, any> & { T: string }
}
