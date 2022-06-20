import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <Container maxWidth='x1' sx={{overflowX: 'hidden'}}>
      <Grid container>
            <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
              <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, 
                      transition: { type: 'spring', duration:3, delay: 1, bounce: .6 }
                    }}
                    viewport={{ once: true }}
              >
                  <Typography margin='0 auto' textAlign='center' gutterBottom variant='h6' sx={{width: '80%'}}>
                    Empresa Familiar con las Mejores recetas
                  </Typography>
                  <Typography margin='0 auto' textAlign='center' variant='body1' sx={{width: '60%'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. 
                  </Typography>
              </motion.div>
            </Grid>

            <Grid  minHeight='300px' item xs={12} sm={6}  position='relative' direction='column' justifyContent='center' alignItems='center'>
                <motion.div
                      initial={{ x: 300 }}
                      whileInView={{ x:0, 
                        transition: { type: 'spring', duration:3, delay: '2' }
                      }}
                      viewport={{ once: true }}
                >
                    test
                </motion.div>
            </Grid>

            <Grid sx={{ display: { xs:'none', sm:'flex'  } }} minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
              <motion.div
                    initial={{ x: 300 }}
                    whileInView={{ x:0, 
                      transition: { type: 'spring', duration:3, delay: '2' }
                    }}
                    viewport={{ once: true }}
              >
                testttt
              </motion.div>
            </Grid>

            <Grid minHeight='300px' item xs={12} sm={6} display='flex' position='relative' direction='column' justifyContent='center' alignItems='center'>
                <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, 
                        transition: { type: 'spring', duration:3, delay: 1, bounce: .6 }
                      }}
                      viewport={{ once: true }}
                >
                    <Typography margin='0 auto' textAlign='center' gutterBottom variant='h6' sx={{width: '80%'}}>
                      Empresa Familiar con las Mejores recetas
                    </Typography>
                    <Typography margin='0 auto' textAlign='center' variantn='body1' sx={{width: '60%'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. 
                    </Typography>
              </motion.div> 
            </Grid>

            <Grid minHeight='300px' sx={{ display: { xs:'flex', sm:'none', } }} item xs={12} sm={6} position='relative' direction='column' justifyContent='center' alignItems='center'>
                <motion.div
                    initial={{ x: -300 }}
                    whileInView={{ x:0, 
                      transition: { type: 'spring', duration:3, delay: '2' }
                    }}
                    viewport={{ once: true }}
              >
                     teeeessstttt
                </motion.div>
            </Grid>
      </Grid>
    </Container>
  )
}

export default History