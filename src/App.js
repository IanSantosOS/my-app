import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import CompPadrao, { Componente1, Componente2 } from './components/Multi';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import PaiDireto from './components/direta/PaiDireto';
// import PaiIndireto from './components/indireta/PaiIndireto';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default function App() {
    return (
        <SafeAreaView style={styles.app}>
            <Mega qntDeNum={12} />
            {/*
            <FlexboxV4/>
            <FlexboxV3/>
            <FlexboxV2/>
            <FlexboxV1/>
            <DigiteSeuNome/>
            <ListaProdutosV2/>
            <ListaProdutos/>
            <UsuarioLogado usuario={{nome: 'Gui', email:'gui@gmail.com'}} />
            <UsuarioLogado usuario={{nome: 'Ana'}} />
            <UsuarioLogado usuario={{email:'carlos@gmail.com'}} />
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>
            <Familia>
                <Membro nome="Ian" sobrenome="Silva" />
                <Membro nome="Ivan" sobrenome="Silva" />
            </Familia>
            
            <Diferenciar/>
            <Text>1 + 1 = {1 + 1}</Text>
            <ContadorV2/>
            <ParImpar num={3} />
            
            <Primeiro/>
            <MinMax min={3} max={20} />
            <MinMax min={1} max={94} />
            <Aleatorio min={80} max={90}/>
            
            <CompPadrao/>
            <Componente1/>
            <Componente2/>
            
            <Botao/>
            <Contador />
            <Contador numInicial={100} passo={2}/>
            
            <PaiDireto />
            <PaiIndireto />
            */}
            
            
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app: {
        flexGrow: 1,
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'center',
        padding: 20
    }
});
