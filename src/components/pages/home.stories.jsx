import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Badge,
    Container,
    FooterButton,
    Section,
    SectionContent,
    ActionLink,
    Text,
    MainContainer,
    LinkHash,
    HomeTable,
} from '../..';

function formatDate() {
    return '20/11/2018 03:01';
}

storiesOf('pages/home', module)
    .add('not items', () => {
        const registries = [
            // {
            //     name: 'apps',
            //     symbol: 'APP',
            //     supply: 2,
            //     contractVersion: 'V1',
            //     admin: '0x4A2cbCE70E62C913b286011C7eF10050cEF799cF',
            //     registrationTimestamp: ''
            // }
        ];
        const account = 'account1';

        const rows = registries.map(register => (
            <tr key={ register.name }>
                <td>
                    <a href='/'>{register.name}</a>
                </td>
                <td>{register.symbol}</td>
                <td>{register.supply}</td>
                <td>{register.contractVersion}</td>
                <td>
                    <LinkHash value={ register.admin } />
                </td>
                <td>{formatDate(register.registrationTimestamp)}</td>
            </tr>
        ));

        const myRows = registries
            .filter(x => x.admin === account)
            .map(register => (
                <tr key={ register.name }>
                    <td>
                        <a href='/'>{register.name}</a>
                    </td>
                    <td>{register.symbol}</td>
                    <td>{register.supply.toNumber()}</td>
                    <td>{register.contractVersion}</td>
                    <td>
                        <LinkHash value={ register.admin } />
                    </td>
                    <td>{formatDate(register.registrationTimestamp)}</td>
                </tr>
            ));

        let content = (
            <div>
                <Section
                  title={ (
                      <span>
                          <span>My registries</span>
                          <Badge>{myRows.length}</Badge>
                      </span>
) }
                >
                    <SectionContent>
                        <Container>
                            <Text>You haven&#39;t created registries yet!</Text>
                            <ActionLink to='/new'>create and deploy right now</ActionLink>
                        </Container>
                    </SectionContent>
                </Section>
            </div>
        );

        if (myRows.length > 0) {
            content = (
                <div>
                    <Section
                      title={ (
                          <span>
                                My registries
                              <Badge>{myRows.length}</Badge>
                          </span>
) }
                    >
                        <SectionContent>
                            <HomeTable>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>SYMBOL</th>
                                        <th>ENTRIES</th>
                                        <th>VERSION</th>
                                        <th>ADMIN</th>
                                        <th>CREATED</th>
                                    </tr>
                                </thead>
                                <tbody>{myRows}</tbody>
                            </HomeTable>
                            <FooterButton to='/new'>create new registry</FooterButton>
                        </SectionContent>
                    </Section>
                </div>
            );
        }

        return (
            <MainContainer>
                <div>
                    <div>{content}</div>

                    <Section
                      title={ (
                          <span>
                              <span>chaingear registries</span>
                              <Badge>{rows.length}</Badge>
                          </span>
) }
                    >
                        <SectionContent>
                            <HomeTable>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>SYMBOL</th>
                                        <th>ENTRIES</th>
                                        <th>VERSION</th>
                                        <th>ADMIN</th>
                                        <th>CREATED</th>
                                    </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </HomeTable>
                        </SectionContent>
                    </Section>
                </div>
            </MainContainer>
        );
    })
    .add('items', () => {
        const registries = [
            {
                name: 'apps',
                symbol: 'APP',
                supply: 2,
                contractVersion: 'V1',
                admin: '0x4A2cbCE70E62C913b286011C7eF10050cEF799cF',
                registrationTimestamp: '',
            },
        ];
        const account = '0x4A2cbCE70E62C913b286011C7eF10050cEF799cF';

        const rows = registries.map(register => (
            <tr key={ register.name }>
                <td>
                    <a href='/'>{register.name}</a>
                </td>
                <td>{register.symbol}</td>
                <td>{register.supply}</td>
                <td>{register.contractVersion}</td>
                <td>
                    <LinkHash value={ register.admin } />
                </td>
                <td>{formatDate(register.registrationTimestamp)}</td>
            </tr>
        ));

        const myRows = registries
            .filter(x => x.admin === account)
            .map(register => (
                <tr key={ register.name }>
                    <td>
                        <a href='/'>{register.name}</a>
                    </td>
                    <td>{register.symbol}</td>
                    <td>{register.supply}</td>
                    <td>{register.contractVersion}</td>
                    <td>
                        <LinkHash value={ register.admin } />
                    </td>
                    <td>{formatDate(register.registrationTimestamp)}</td>
                </tr>
            ));

        let content = (
            <div>
                <Section
                  title={ (
                      <span>
                          <span>My registries</span>
                          <Badge>{myRows.length}</Badge>
                      </span>
) }
                >
                    <SectionContent>
                        <Container>
                            <Text>You haven&#39;t created registries yet!</Text>
                            <ActionLink to='/new'>create and deploy right now</ActionLink>
                        </Container>
                    </SectionContent>
                </Section>
            </div>
        );

        if (myRows.length > 0) {
            content = (
                <div>
                    <Section
                      title={ (
                          <span>
                                My registries
                              <Badge>{myRows.length}</Badge>
                          </span>
) }
                    >
                        <SectionContent>
                            <HomeTable>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>SYMBOL</th>
                                        <th>ENTRIES</th>
                                        <th>VERSION</th>
                                        <th>ADMIN</th>
                                        <th>CREATED</th>
                                    </tr>
                                </thead>
                                <tbody>{myRows}</tbody>
                            </HomeTable>
                            <FooterButton to='/new'>create new registry</FooterButton>
                        </SectionContent>
                    </Section>
                </div>
            );
        }

        return (
            <MainContainer>
                <div>
                    <div>{content}</div>

                    <Section
                      title={ (
                          <span>
                              <span>chaingear registries</span>
                              <Badge>{rows.length}</Badge>
                          </span>
) }
                    >
                        <SectionContent>
                            <HomeTable>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>SYMBOL</th>
                                        <th>ENTRIES</th>
                                        <th>VERSION</th>
                                        <th>ADMIN</th>
                                        <th>CREATED</th>
                                    </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </HomeTable>
                        </SectionContent>
                    </Section>
                </div>
            </MainContainer>
        );
    });
