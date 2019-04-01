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
        const { status, rank, grade, onClick, children } = this.props;

        let rankGradeColor = 'neutral';
        switch (grade.value) {
          case 1:
            rankGradeColor = 'red';
            break;
          case 2:
            rankGradeColor = 'orange';
            break;
          case 3:
            rankGradeColor = 'yellow';
            break;
          case 4:
            rankGradeColor = 'green';
            break;
          case 5:
            rankGradeColor = 'teal';
            break;
          case 6:
            rankGradeColor = 'blue';
            break;
          case 7:
            rankGradeColor = 'purple';
            break;
          default:
            rankGradeColor = 'neutral';
            break;
        }

        const linkWithTooltip = (
          <Pane display='flex' alignItems='center'>
            <Tooltip
              appearance='card'
              content={ (
                <Pane paddingX={ 18 } paddingY={ 18 }>
                  <Pane display='flex' alignItems='center' marginBottom={ 10 }>
                    <Text>
                      {status === 'loading' && 'Receiving answer from IPFS'}
                      {status === 'failed' && 'Can’t receive answer from IPFS'}
                      {status === 'success' && 'Answer received from IPFS'}
                    </Text>
                  </Pane>
                  <Pane>
                    <Text>
                      More on{' '}
                      <Link textDecoration='none' color='green' cursor='pointer'>
                        IPFS
                      </Link>
                    </Text>
                  </Pane>
                </Pane>
              ) }
            >
              <Text
                color={ this.state.hover ? '#979797' : '#000'}
                size={ 400 }
              >
                {children}
              </Text>
            </Tooltip>
          </Pane>
        );

        const gradeTooltipContent = (
          <Pane paddingX={ 18 } paddingY={ 18 }>
            <Pane marginBottom={ 12 }>
              <Text>Answer rank is {rank}</Text>
            </Pane>
            <Pane display='flex' marginBottom={ 12 }>
              <Text>
                Answers between	&nbsp;{grade.from}&nbsp; and &nbsp;{grade.to}&nbsp; recieve grade
                <Pill
                  paddingX={ 8 }
                  paddingY={ 5 }
                  width={ 23 }
                  marginLeft={ 5 }
                  display='inline-flex'
                  alignItems='center'
                  style={ { color: '#fff' } }
                  color={ rankGradeColor }
                  isSolid
                >
                  {grade.value}
                </Pill>
              </Text>
            </Pane>
            <Pane>
              <Text>
                More on{' '}
                <Link textDecoration='none' color='green' cursor='pointer'>
                  cyber•Rating
                </Link>
              </Text>
            </Pane>
          </Pane>
        );

        const rankGradeWithTooltip = (
          <Tooltip
            appearance='card'
            content={ gradeTooltipContent }
          >
            <Pill
              paddingX={ 8 }
              paddingY={ 5 }
              display='flex'
              alignItems='center'
              style={ { color: '#fff' } }
              color={ rankGradeColor }
              isSolid
            >
              {grade.value}
            </Pill>
          </Tooltip>
        );

        const item = (
          <Pane
            boxShadow={ '0px 0px 0.4px 0px #dedede' }
            onMouseEnter={ () => this.handleHover() }
            onMouseLeave={ () => this.handleHover() }
            paddingLeft={ 20 }
            paddingRight={ 10 }
            paddingY={ 12 }
            display='flex'
            justifyContent='space-between'
            key={ this.props.hash }
            backgroundColor={'#fff'}
            borderRadius={ 5 }
            marginBottom={ 10 }
            onClick={ onClick }
          >
            {linkWithTooltip}

            {status === 'success' && rankGradeWithTooltip }

            {status === 'loading' && (
              <Spinner size={ 16 } />
            )}
          </Pane>
        );

        return (
          <span>
            {status === 'success' ? (
              <a
                style={{
                  textDecoration: "none"
                }}
                href={`cyb://${children}`}
              >
                {item}
              </a>
            ) :
              item
            }
          </span>
        );
    }
}
