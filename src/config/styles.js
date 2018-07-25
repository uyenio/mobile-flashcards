import styled from 'styled-components/native';
import {
    INFO_BUTTON,
    INFO_BUTTON_TEXT,
    PRIMARY_BUTTON,
    SECONDARY_BUTTON,
    BUTTON_TEXT
  } from './colours';

export const StyledAnswer = styled.Text`
    font-size: 20;
    padding-horizontal: 15;
    padding-vertical: 25;
    text-align: center;
`;

export const StyledRemainingQuestions = styled.Text`
    font-size: 12;
    font-style: italic;
    padding-horizontal: 15;
    padding-vertical: 25;
    text-align: center;
`;

export const StyledButtonWrapper = styled.View`
    margin-vertical: 50;
    padding-top: 20;
    padding-horizontal: 25;
    padding-bottom: 25;
`;

export const StyledDeckView = styled.View`
    flex: 1;
`;

export const StyledDeckTitle = styled.Text`
    font-size: 20;
    padding-vertical: 15;
    padding-horizontal: 15;
    text-align: center;
`;

export const StyledDeckLength = styled.Text`
    font-size: 16;
    font-style: italic;
    padding-vertical: 15;
    padding-horizontal: 15;
    text-align: center;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
    padding-vertical: 10;
`;

export const StyledInfoButton = styled.Text`
    background-color: ${INFO_BUTTON};
    text-align: center;
    font-size: 22;
    color: ${INFO_BUTTON_TEXT};
    margin-left: 5;
    margin-right: 5;
    padding-top: 10;
    padding-bottom: 10;
    margin-vertical: 10;
`;

export const StyledPrimaryButton = styled.Text`
    background-color: ${PRIMARY_BUTTON};
    text-align: center;
    font-size: 22;
    color: ${BUTTON_TEXT};
    margin-left: 40;
    margin-right: 40;
    height: 45;
    padding-top: 10;
    padding-bottom: 10;
    margin-vertical: 10;
`;

export const StyledSecondaryButton = styled.Text`
    background-color: ${SECONDARY_BUTTON};
    text-align: center;
    font-size: 22;
    color: ${BUTTON_TEXT};
    margin-left: 40;
    margin-right: 40;
    padding-top: 10;
    padding-bottom: 10;
    margin-vertical: 10;
`;

export const NotificationPrompt = styled.Text`
    font-size: 20;
    text-align: center;
    padding-top: 10;
    padding-horizontal: 15;
`;

export const StyledQuestion = styled.Text`
    font-size: 20;
    padding-horizontal: 15;
    padding-vertical: 25;
    text-align: center;
`;

export const StyledScore = styled.Text`
    font-size: 20;
    padding-vertical: 15;
    padding-horizontal: 15;
    text-align: center;
`;

export const StyledSettingsHeader = styled.Text`
    font-size: 24;
    padding-vertical: 15;
    padding-horizontal: 15;
    text-align: center;
`;

export const StyledTextInputWrapper = styled.View`
    padding-horizontal: 15;
`;

export const StyledFieldLabel = styled.Text`
    font-size: 16;
    padding-top: 10;
`;

export const StyledHomeHeader = styled.Text`
    font-size: 24;
    text-align: center;
    padding-top: 10;
    padding-horizontal: 15;
`;

export const StyledHomeSubHeader = StyledHomeHeader.extend`
    font-size: 18;
    padding-bottom: 10;
`;