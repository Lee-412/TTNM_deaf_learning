'use client'
import { Image } from '@mantine/core';

const Contribution = () => {
    return (
        <>


            {/* <div style={{
                position: 'relative',
                width: '100%',
                height: '0',
                paddingTop: '53.3333%',
                paddingBottom: '0',
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginTop: '1.6em',
                marginBottom: '0.9em',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform'
            }}>
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0
                    }}
                    src="/contribution.png"
                    allowFullScreen={true}
                />
                {/* <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    zIndex: 10,
                    cursor: 'default',
                }} /> 
            </div > */}

            {/* //https://www.canva.com/design/DAGUpar_3P4/TdOMgVDbGSZG1fiNQ7p4fg/view?embed */}
            {/* https://www.canva.com/design/DAGUljsCpY8/pcaYlOFCfhxPwN0AFkrTyg/view?embed */}
            {/* https://www.canva.com/design/DAGUpar_3P4/TdOMgVDbGSZG1fiNQ7p4fg/view?embed */}
            <Image
                radius="md"
                src="/contribution/contribution.png"
            />
        </>
    )
}
export default Contribution;