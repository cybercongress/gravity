import * as React from 'react';
import {
    Pane, Pill, Text, Spinner, Tooltip, Link,
} from 'evergreen-ui';
import styles from './SearchItem.less';
// import cx from 'classnames';

export class SearchItem extends React.Component {
    state = {
        hover: false,
    };

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const { props } = this.props;

        return (
            <Pane
              elevation={ this.state.hover ? 3 : 0 }
              onMouseEnter={ () => this.handleHover() }
              onMouseLeave={ () => this.handleHover() }
              paddingLeft={ 20 }
              paddingRight={ 10 }
              paddingY={ 12 }
              display='flex'
              justifyContent='space-between'
              key={ this.props.hash }
              backgroundColor='white'
              borderRadius={ 5 }
              marginBottom={ 10 }
                // className={ styles.searchItem }
            >
                <Pane display='flex' alignItems='center'>
                    <Tooltip
                      content={ (
                          <Pane paddingX={ 18 } paddingY={ 18 }>
                              <Pane display='flex' alignItems='center' marginBottom={ 10 }>
                                  <Pill
                                    height={ 6 }
                                    width={ 6 }
                                    borderRadius='50%'
                                    marginRight={ 5 }
                                    paddingX={ 0 }
                                    isSolid
                                    color={
                                            this.props.status == 'local'
                                                ? 'green'
                                                : this.props.status == 'fail'
                                                ? 'red'
                                                : 'yellow'
                                        }
                                  />
                                  <Text>answer recieved from IPFS</Text>
                              </Pane>
                              {this.props.status != 'fail' && (
                              <Pane marginBottom={ 10 }>
                                  <Text>
                                      {this.props.status == 'local'
                                                ? 'File size:'
                                                : 'Dowloaded:'}
                                      {' '}
                                            163 kB
                                  </Text>
                              </Pane>
                                )}

                              <Pane>
                                  <Text>
                                        More on
                                      {' '}
                                      <Link textDecoration='none' color='green' cursor='pointer'>
                                            IPFS
                                      </Link>
                                  </Text>
                              </Pane>
                          </Pane>
) }
                      appearance='card'
                    >
                        <Pill
                          height={ 6 }
                          width={ 6 }
                          borderRadius='50%'
                          marginRight={ 16 }
                          paddingX={ 0 }
                          isSolid
                          color={
                                this.props.status == 'local'
                                    ? 'green'
                                    : this.props.status == 'fail'
                                    ? 'red'
                                    : 'yellow'
                            }
                        />
                    </Tooltip>
                    <Text
                        // style={ { textDecoration: 'none' } }
                      size={ 400 }
                        // href={ `cyb://${children}` }
                    >
                        {this.props.children}
                    </Text>
                </Pane>
                {this.props.rank != '' && (
                    <Tooltip
                      appearance='card'
                      content={ (
                          <Pane paddingX={ 18 } paddingY={ 18 }>
                              <Pane marginBottom={ 12 }>
                                  <Text>Answer rank is 2 007 177 CYBER</Text>
                              </Pane>
                              <Pane display='flex' marginBottom={ 12 }>
                                  <Text>
                                        Answers between 1 GCYBER and 200 GCYBER recieve grade
                                      <Pill
                                        paddingX={ 8 }
                                        paddingY={ 5 }
                                        width={ 23 }
                                        marginLeft={ 5 }
                                        display='inline-flex'
                                        alignItems='center'
                                            //   height={16}
                                        style={ { color: '#fff' } }
                                        color={
                                                this.props.rank == 1
                                                    ? 'red'
                                                    : this.props.rank == 2
                                                    ? 'orange'
                                                    : this.props.rank == 3
                                                    ? 'yellow'
                                                    : this.props.rank == 4
                                                    ? 'green'
                                                    : this.props.rank == 5
                                                    ? 'teal'
                                                    : this.props.rank == 6
                                                    ? 'blue'
                                                    : this.props.rank == 7
                                                    ? 'purple'
                                                    : 'neutral'
                                            }
                                        isSolid
                                      >
                                          {this.props.rank}
                                      </Pill>
                                  </Text>
                              </Pane>
                              <Pane>
                                  <Text>
                                        More on
                                      {' '}
                                      <Link textDecoration='none' color='green' cursor='pointer'>
                                            cyber•Rating
                                      </Link>
                                  </Text>
                              </Pane>
                          </Pane>
) }
                    >
                        <Pill
                          paddingX={ 8 }
                          paddingY={ 5 }
                          display='flex'
                          alignItems='center'
                            //   width={ 23 }
                            //   height={16}
                          style={ { color: '#fff' } }
                          color={
                                this.props.rank == 1
                                    ? 'red'
                                    : this.props.rank == 2
                                    ? 'orange'
                                    : this.props.rank == 3
                                    ? 'yellow'
                                    : this.props.rank == 4
                                    ? 'green'
                                    : this.props.rank == 5
                                    ? 'teal'
                                    : this.props.rank == 6
                                    ? 'blue'
                                    : this.props.rank == 7
                                    ? 'purple'
                                    : 'neutral'
                            }
                          isSolid
                        >
                            {this.props.rank}
                        </Pill>
                    </Tooltip>
                )}
                {this.props.rank == '' && <Spinner size={ 16 } />}
            </Pane>
        );
    }
}
