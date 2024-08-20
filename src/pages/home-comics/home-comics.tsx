import { Layout } from "../../components/layout/Layout"
import { HotComics } from "../../components/comics/HotComics"
import { LatestAndTopRatedSection } from "../../components/comics/LatestAndTopRatedSection"
import { SectionComics } from "../../components/comics/SectionComics"
import { CarrousselComics } from "../../components/carroussel/CarrousselComics"
import { Banner } from "../../components/header/Banner"

export function HomeComics() {
  return (
    <>
      <Banner/>
      <Layout className="h-[400px] py-6">
        <HotComics/>
      </Layout>
      <div className="w-full h-[1px] bg-slate-400" />
      <Layout className="py-6">
        <LatestAndTopRatedSection/>
      </Layout>
      <div className="w-full h-[1px] bg-slate-400" />
        <SectionComics title="Independant Studio"/>
      
      <SectionComics title="Independant Studio"/>
      <Layout className="py-24">
        <CarrousselComics/>
      </Layout>
    </>
  )
}