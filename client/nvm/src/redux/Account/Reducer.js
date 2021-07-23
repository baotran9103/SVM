import * as t from './Type'

const initialState = {
    launcherId:'',
    unpaidBalanceInXCH:0,
    totalPaidInXCH:0.010067203029,
totalPoints:3145,
blocksFound:1,
estimatedPlotSizeTiB:21.170608696976135,
estimatedPlots:219,
lastRoundShare:0,
joinDateTimeUtc:"2021-07-09T19:54:49.0000000Z",
extraStatsJSON:{"version":"3","space":[{"date":1626932294,"tib":20.838188646358073},{"date":1626932918,"tib":20.89862002494165},{"date":1626933544,"tib":20.362726320788273},{"date":1626934169,"tib":19.683505419440703},{"date":1626934804,"tib":19.228977027948723},{"date":1626935431,"tib":16.3325075434024},{"date":1626936056,"tib":17.673730159528812},{"date":1626936685,"tib":18.370963566550635},{"date":1626937312,"tib":19.05542123779755},{"date":1626937938,"tib":18.418144037364307},{"date":1626938564,"tib":17.71238547163689},{"date":1626939189,"tib":18.93158199156141},{"date":1626939815,"tib":18.737988390287143},{"date":1626940440,"tib":16.814579580795726},{"date":1626941066,"tib":19.43309188409857},{"date":1626941693,"tib":17.60558054394167},{"date":1626942320,"tib":20.251049484996592},{"date":1626942947,"tib":21.00896476227458},{"date":1626943574,"tib":21.68422286873081},{"date":1626944202,"tib":22.010149688225965},{"date":1626944830,"tib":22.620991053563476},{"date":1626945457,"tib":22.492951876517925},{"date":1626946085,"tib":21.844718295029082},{"date":1626946714,"tib":22.461606387094736},{"date":1626947341,"tib":21.182103956141564},{"date":1626947969,"tib":21.3025282045756},{"date":1626948596,"tib":20.615059383954303},{"date":1626949225,"tib":16.247882454114357},{"date":1626949855,"tib":17.651768187617122},{"date":1626950483,"tib":16.377128474777134},{"date":1626951122,"tib":15.924954064157005},{"date":1626951750,"tib":15.98908957819156},{"date":1626952379,"tib":14.01340865469158},{"date":1626953008,"tib":13.419134055959347},{"date":1626953637,"tib":12.714342489029587},{"date":1626954267,"tib":13.332814455832068},{"date":1626954896,"tib":13.288822150957836},{"date":1626955537,"tib":13.24996219847751},{"date":1626956168,"tib":12.67055794926381},{"date":1626956798,"tib":13.690098705468332},{"date":1626957429,"tib":14.29477266261909},{"date":1626958069,"tib":13.821278557546114},{"date":1626958700,"tib":15.730856797779921},{"date":1626959332,"tib":17.149673776056154},{"date":1626959964,"tib":17.24121271666444},{"date":1626960597,"tib":17.111478116391055},{"date":1626961228,"tib":17.71710320333641},{"date":1626961870,"tib":17.025012575753035},{"date":1626962502,"tib":17.655235295596885},{"date":1626963136,"tib":17.77759894277902},{"date":1626963769,"tib":17.73362401443803},{"date":1626964404,"tib":18.401021765209684},{"date":1626965037,"tib":18.550120898854285},{"date":1626965671,"tib":18.4438350881781},{"date":1626966305,"tib":19.70606896432137},{"date":1626966938,"tib":16.00789614245585},{"date":1626967572,"tib":15.437534688288617},{"date":1626968206,"tib":14.878752270029457},{"date":1626968840,"tib":14.308333258476207},{"date":1626969475,"tib":12.42054344171655},{"date":1626970109,"tib":12.824105991487269},{"date":1626970744,"tib":11.34752993376018},{"date":1626971377,"tib":10.424688879258365},{"date":1626972011,"tib":10.926077029732678},{"date":1626972645,"tib":12.454550335824269},{"date":1626973279,"tib":12.16502642733438},{"date":1626973912,"tib":11.560294524675806},{"date":1626974546,"tib":11.695626631886906},{"date":1626975181,"tib":14.803964249711111},{"date":1626975815,"tib":14.75818613678156},{"date":1626976450,"tib":14.936852880754211},{"date":1626977085,"tib":15.117343870974938},{"date":1626977721,"tib":17.037834529301048},{"date":1626978357,"tib":17.530452999906526},{"date":1626978991,"tib":18.81616397063953},{"date":1626979626,"tib":22.338461352547526},{"date":1626980261,"tib":20.139660590936366},{"date":1626980896,"tib":19.050521770351974},{"date":1626981586,"tib":17.736491302459306},{"date":1626982402,"tib":20.46284226249799},{"date":1626983038,"tib":20.913214925424725},{"date":1626983673,"tib":19.228271850320397},{"date":1626984308,"tib":20.094219438825103},{"date":1626984944,"tib":20.968437976000427},{"date":1626985579,"tib":20.07520314084134},{"date":1626986215,"tib":18.75105631905445},{"date":1626986851,"tib":17.652354471607147},{"date":1626987485,"tib":17.591278125804795},{"date":1626988120,"tib":17.456830197414746},{"date":1626988755,"tib":20.00626134849321},{"date":1626989391,"tib":19.3506518067152},{"date":1626990027,"tib":19.6703428508808},{"date":1626990663,"tib":20.203974812634776},{"date":1626991298,"tib":19.515297554577593},{"date":1626991933,"tib":19.39659681079759},{"date":1626992569,"tib":17.211980886202358},{"date":1626993205,"tib":19.92485387173941},{"date":1626993841,"tib":20.118452890253295},{"date":1626994478,"tib":20.682702028506238},{"date":1626995115,"tib":22.183460665280684}]},
lastDifficulty:6,
pendingPoints:204,
accountDisplayName:"",
globalPendingPoints:7342615,
rank:9656
}

export default function Reducer(state=initialState,action){
    switch (action.type){
        // case t.changetheme:
        //     state.Darkmode = action.payload;
        //     return state;
        default:
            return state;
    }
}