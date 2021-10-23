import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'

export function Dashboard() {
  const data = [
    {
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/04/2021'
    },
    {
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '12/04/2021'
    },
    {
      type: 'negative',
      title: 'Aluguel da Casa',
      amount: 'R$ 940,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: '10/04/2021'
    },
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/6179728?v=4' }} 
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Josué</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      
      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.000,00" 
          lastTransaction="Última entrada dia 13 de abril" />
        <HighlightCard 
          type="down"
          title="Saídas"
          amount="R$ 1.259,00" 
          lastTransaction="Última saída dia 03 de abril" />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril" />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />

      </Transactions>

    </Container>
  )
}
