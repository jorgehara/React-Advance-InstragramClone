import React from 'react'
import { Anchor, Image } from './syles'

const DEFAULT_IMAGE = ''

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = ':D ?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
