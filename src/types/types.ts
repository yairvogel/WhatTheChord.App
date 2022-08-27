import React from 'react'

export type ReactElement<P> = React.ReactElement<P, React.JSXElementConstructor<P>>

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>