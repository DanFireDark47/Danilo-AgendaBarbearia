import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Index from './src/Index';
import Agenda from './src/Agenda';


const AppNavigator = createSwitchNavigator({
  Index: Index,
  Agenda: Agenda
  
},
{
  initialRouteName: 'Index',
}
)

export default createAppContainer(AppNavigator);

