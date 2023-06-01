import Giscus from '@giscus/react';
import Grid from '../general/grid';
import Cell from '../general/cell';
import Typed from "react-typed"

export default function GuestBook() {
  return (
    <Grid className="mt-32">
      <Cell cols='1_full'>
        <div className="w-full flex justify-center font-mono text-3xl md:text-4xl pt-16 pb-20">
          <Typed
            showCursor={false}
            typeSpeed={30}
            strings={[`Welcome to my <span style="font-family: IBM Plex Mono; color: #2FD2BD;">Guest Book !</span>`]}
          />
        </div>
      </Cell>
      <Cell cols="1_full" colsMd='4_6' className="pb-24">
        <Giscus
          id="comments"
          repo="reynoldputra/reynoldputra.com"
          repoId="R_kgDOJYXGGQ"
          category="General"
          categoryId="DIC_kwDOJYXGGc4CW4Nl"
          mapping="specific"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="cobalt"
          lang="en"
          loading="lazy"
        />
      </Cell>
    </Grid>
  )
}
