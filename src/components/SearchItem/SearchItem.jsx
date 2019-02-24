import * as React from 'react';
import {
    Pane, Pill, Text, Spinner, Tooltip, Link,
} from 'evergreen-ui';
import styles from './SearchItem.less';
// import cx from 'classnames';

const PillIndikator = props => (
    <Pill
      height={ 6 }
      width={ 6 }
      borderRadius='50%'
      marginRight={ 5 }
      paddingX={ 0 }
      isSolid
      color={ props.status == 'local' ? 'green' : props.status == 'fail' ? 'red' : 'yellow' }
    />
);

const PillBadge = props => (
    <Pill
      paddingX={ 8 }
      paddingY={ 5 }
      width={ 23 }
      marginLeft={5}
      display='inline-flex'
      alignItems='center'
        //   height={16}
      style={ { color: '#fff' } }
      color={
            props.rank == 1
                ? 'red'
                : props.rank == 2
                ? 'orange'
                : props.rank == 3
                ? 'yellow'
                : props.rank == 4
                ? 'green'
                : props.rank == 5
                ? 'teal'
                : props.rank == 6
                ? 'blue'
                : props.rank == 7
                ? 'purple'
                : 'neutral'
        }
      isSolid
    >
        {props.rank}
    </Pill>
);

export const SearchItem = ({ children, ...props }) => (
    <Pane
      elevation={ 0 }
      paddingLeft={ 20 }
      paddingRight={ 10 }
      paddingY={ 12 }
      display='flex'
      justifyContent='space-between'
      { ...props }
      key={ props.hash }
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
                          <PillIndikator { ...props } />
                          <Text>answer recieved from IPFS</Text>
                      </Pane>
                      {props.status != 'fail' && (
                      <Pane marginBottom={ 10 }>
                          <Text>
                              {props.status == 'local' ? 'File size:' : 'Dowloaded:'}
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
                        props.status == 'local'
                            ? 'green'
                            : props.status == 'fail'
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
                {children}
            </Text>
        </Pane>
        {props.rank != '' && (
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
                                <PillBadge { ...props } />
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
                  width={ 23 }
                    //   height={16}
                  style={ { color: '#fff' } }
                  color={
                        props.rank == 1
                            ? 'red'
                            : props.rank == 2
                            ? 'orange'
                            : props.rank == 3
                            ? 'yellow'
                            : props.rank == 4
                            ? 'green'
                            : props.rank == 5
                            ? 'teal'
                            : props.rank == 6
                            ? 'blue'
                            : props.rank == 7
                            ? 'purple'
                            : 'neutral'
                    }
                  isSolid
                >
                    {props.rank}
                </Pill>
            </Tooltip>
        )}
        {props.rank == '' && <Spinner size={ 16 } />}
    </Pane>
);
