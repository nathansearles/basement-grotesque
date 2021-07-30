import { styled } from '../../../stitches.config'
import GrostesqueAB from '../../../public/svg/grotesque-ab.svg'

const Container = styled('div', {
  variants: {
    type: {
      'section-container': {
        display: 'block',
        my: '46px'
      },
      'content-container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: '78px'
      }
    }
  }
})

const Text = styled('p', {
  fontFamily: '$body',
  fontWeight: 500,
  color: '$black',
  fontSize: '$6',
  textIndent: '150px',

  variants: {
    font: {
      grotesque: {
        fontFamily: '$heading',
        fontSize: '546px',
        lineHeight: '656px',
        fontWeight: 800
      }
    }
  }
})

const AboutSection = () => {
  return (
    <Container as="section" type="section-container">
      <Container type="content-container">
        <Container css={{ width: '50%' }}>
          <Text>
            BSMNT Grotesque is a font inspired by varius placerat urna ornare
            hendrerit nascetur. Ac purus molestie eleifend magna turpis
            bibendum. Porta habitant nunc integer augue nam feugiat cras aenean.
          </Text>
          <Text>
            Etiam eget sit mattis pretium sed. Imperdiet eget urna nulla aliquet
            urna. Volutpat in morbi quam pulvinar in magna duis. Adipiscing nisi
            placerat mus nisl vitae imperdiet. Posuere arcu molestie diam
            egestas. Placerat iaculis sed quis eget massa.
          </Text>
        </Container>
        <GrostesqueAB />
      </Container>
      <Text css={{ ta: 'center', fontWeight: 800 }}>***</Text>
    </Container>
  )
}

export default AboutSection
