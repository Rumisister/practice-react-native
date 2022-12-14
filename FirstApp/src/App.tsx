import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';

interface Props {}

const App = ({ }: Props) => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Header />
        <Body>
          <SectionContainer>
            <SectionDescription>Step One
          Edit <HighLight>App.js</HighLight> to Change this screen and then come back to see your deits.
          </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <SectionDescription>
              See Your Changes
            </SectionDescription>
            <ReloadInstructions />
          </SectionContainer>
          <SectionContainer>
            <SectionDescription>
              Debug
            </SectionDescription>
            <SectionDescription>
              <DebugInstructions />
            </SectionDescription>
          </SectionContainer>
          <SectionContainer>
            <SectionDescription>Learn More</SectionDescription>
            <SectionDescription>Read the docs to discover what to do next:
            </SectionDescription>
          </SectionContainer>
          <LearnMoreLinks />
        </Body>
      </ScrollView>
    </SafeAreaView>
    </Fragment>

  );
};

const ScrollView = Styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const Body = Styled.View`
  background-color: ${Colors.white};
`;

const SectionContainer = Styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionDescription = Styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight: 700;
`;

export default App;
