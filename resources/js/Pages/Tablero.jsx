import React from 'react'
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
  Metric, Text, Icon, Flex, Grid, Card,
  List,
  ListItem,
  Bold,
  Title,
  Button,

} from '@tremor/react';
import {
  CashIcon, TicketIcon, BriefcaseIcon,
  DesktopComputerIcon,
  ShieldExclamationIcon,
  ShoppingBagIcon,
  ArrowNarrowRightIcon,
  LightningBoltIcon,
  HomeIcon,
  TruckIcon,
} from "@heroicons/react/solid";


export default function Inicio(props) {
  return (
    <>
      <AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">Tablero de Control</h2>}
      >
        <Head title="Tablero" />

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm flex justify-center items-center  sm:rounded-lg">


              <div className='flex flex-col gap-10 py-2 mx-9 my-8 '>
                <p className='font-bold text-2xl'>Descripción General</p>
                <Grid numItemsSm={2} numItemsLg={2} className="gap-6 items-center bg-[#F8D442] p-6 rounded-2xl">
                  <Card decoration="top" decorationColor='indigo'>
                    <Flex justifyContent="start" className="space-x-4">
                      <Icon icon={TicketIcon} variant="light" size="xl" color='amber' />
                      <div className="truncate">
                        <Text>Cantidad de productos</Text>
                        <Metric className="truncate">56,456</Metric>
                      </div>
                    </Flex>
                  </Card>
                  <Card decoration="top" decorationColor='indigo'>
                    <Flex justifyContent="start" className="space-x-4">
                      <Icon icon={CashIcon} variant="light" size="xl" color='amber' />
                      <div className="truncate">
                        <Text>Total de ventas</Text>
                        <Metric className="truncate">$ 456,456</Metric>
                      </div>
                    </Flex>
                  </Card>
                </Grid>
                <div>

                  <p className='font-bold'>Categorias:</p>

                  <div className='pt-14'>
                    <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
                      <Card >
                        <Title>Lacteos</Title>
                        <Text>Leche</Text>
                        <List className="mt-4">
                          <ListItem key={null}>
                            <Flex justifyContent="start" className="truncate space-x-4">
                              <Icon
                                variant="light"
                                icon={ShoppingBagIcon}
                                size="md"
                                color='sky'
                              />
                              <div className="truncate">
                                <Text className="truncate">
                                  <Bold>Gloria</Bold>
                                </Text>
                                <Text className="truncate">
                                  24 Productos
                                </Text>
                              </div>
                            </Flex>
                            <Text>$ 230</Text>
                          </ListItem>
                        </List>
                        <List className="mt-4">
                          <ListItem key={null}>
                            <Flex justifyContent="start" className="truncate space-x-4">
                              <Icon
                                variant="light"
                                icon={LightningBoltIcon}
                                size="md"
                                color='yellow'
                              />
                              <div className="truncate">
                                <Text className="truncate">
                                  <Bold>Gloria</Bold>
                                </Text>
                                <Text className="truncate">
                                  24 Productos
                                </Text>
                              </div>
                            </Flex>
                            <Text>$ 230</Text>
                          </ListItem>
                        </List>
                        <Button
                          size="sm"
                          variant="light"
                          icon={ArrowNarrowRightIcon}
                          iconPosition="right"
                          className="mt-4"
                        >
                          View details
                        </Button>
                      </Card>

                      <Card >
                        <Title>Carnes</Title>
                        <Text>Carnes y pollos</Text>
                        <List className="mt-4">
                          <ListItem key={null}>
                            <Flex justifyContent="start" className="truncate space-x-4">
                              <Icon
                                variant="light"
                                icon={ShoppingBagIcon}
                                size="md"
                                color='sky'
                              />
                              <div className="truncate">
                                <Text className="truncate">
                                  <Bold>Gloria</Bold>
                                </Text>
                                <Text className="truncate">
                                  24 Productos
                                </Text>
                              </div>
                            </Flex>
                            <Text>$ 230</Text>
                          </ListItem>
                        </List>

                        <List className="mt-4">
                          <ListItem key={null}>
                            <Flex justifyContent="start" className="truncate space-x-4">
                              <Icon
                                variant="light"
                                icon={LightningBoltIcon}
                                size="md"
                                color='yellow'
                              />
                              <div className="truncate">
                                <Text className="truncate">
                                  <Bold>Gloria</Bold>
                                </Text>
                                <Text className="truncate">
                                  24 Productos
                                </Text>
                              </div>
                            </Flex>
                            <Text>$ 230</Text>
                          </ListItem>
                        </List>
                        <Button
                          size="sm"
                          variant="light"
                          icon={ArrowNarrowRightIcon}
                          iconPosition="right"
                          className="mt-4"
                        >
                          View details
                        </Button>
                      </Card>
                    </Grid>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-10 px-16  justify-center'>
                <p className='font-bold'>Popular Products:</p>
                <Card >
                  <Title>Lacteos</Title>
                  <Text>Leche</Text>
                  <List className="mt-4">
                    <ListItem key={null}>
                      <Flex justifyContent="start" className="truncate space-x-4">
                        <Icon
                          variant="light"
                          icon={HomeIcon}
                          size="md"
                          color='orange'
                        />
                        <div className="truncate">
                          <Text className="truncate">
                            <Bold>Gloria</Bold>
                          </Text>
                          <Text className="truncate">
                            24 Productos
                          </Text>
                        </div>
                      </Flex>
                      <Text>$ 230</Text>
                    </ListItem>
                  </List>
                  <List className="mt-4">
                    <ListItem key={null}>
                      <Flex justifyContent="start" className="truncate space-x-4">
                        <Icon
                          variant="light"
                          icon={ShieldExclamationIcon}
                          size="md"
                          color='pink'
                        />
                        <div className="truncate">
                          <Text className="truncate">
                            <Bold>Gloria</Bold>
                          </Text>
                          <Text className="truncate">
                            24 Productos
                          </Text>
                        </div>
                      </Flex>
                      <Text>$ 230</Text>
                    </ListItem>
                  </List>
                  <Button
                    size="sm"
                    variant="light"
                    icon={ArrowNarrowRightIcon}
                    iconPosition="right"
                    className="mt-4"
                  >
                    View details
                  </Button>
                </Card>

                <Card >
                  <Title>Carnes</Title>
                  <Text>Carnes y pollos</Text>
                  <List className="mt-4">
                    <ListItem key={null}>
                      <Flex justifyContent="start" className="truncate space-x-4">
                        <Icon
                          variant="light"
                          icon={DesktopComputerIcon}
                          size="md"
                          color='indigo'
                        />
                        <div className="truncate">
                          <Text className="truncate">
                            <Bold>Gloria</Bold>
                          </Text>
                          <Text className="truncate">
                            24 Productos
                          </Text>
                        </div>
                      </Flex>
                      <Text>$ 230</Text>
                    </ListItem>
                  </List>

                  <List className="mt-4">
                    <ListItem key={null}>
                      <Flex justifyContent="start" className="truncate space-x-4">
                        <Icon
                          variant="light"
                          icon={BriefcaseIcon}
                          size="md"
                          color='rose'
                        />
                        <div className="truncate">
                          <Text className="truncate">
                            <Bold>Gloria</Bold>
                          </Text>
                          <Text className="truncate">
                            24 Productos
                          </Text>
                        </div>
                      </Flex>
                      <Text>$ 230</Text>
                    </ListItem>
                  </List>
                  <Button
                    size="sm"
                    variant="light"
                    icon={ArrowNarrowRightIcon}
                    iconPosition="right"
                    className="mt-4"
                  >
                    View details
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}