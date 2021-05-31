// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../src/pages_'

export default function Page({ _ns, _lang, ...p }){
  return (
    <I18nProvider
      lang={_lang}
      namespaces={_ns}  
      
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })





export const getStaticProps = async ctx => {
    const _lang = ctx.locale || ctx.router?.locale || 'en'
  const ns0 = await import(`../../locales/${_lang}/auth`).then(m => m.default)
const ns1 = await import(`../../locales/${_lang}/common`).then(m => m.default)
const ns2 = await import(`../../locales/${_lang}/navigation`).then(m => m.default)
const ns3 = await import(`../../locales/${_lang}/application`).then(m => m.default)
const ns4 = await import(`../../locales/${_lang}/landing`).then(m => m.default)
  const _ns = { 'auth': ns0, 'common': ns1, 'navigation': ns2, 'application': ns3, 'landing': ns4 }
  
    let res = {}
    if(typeof res.then === 'function') res = await res
  
    return { 
      ...res, 
      props: {
        ...(res.props || {}),
        _ns,
        _lang,
      }
    }
  }



