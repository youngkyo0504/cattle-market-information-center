import { ICattleMarketInfo, MarketName } from ".";

type CattleMarketInfos = { [K in MarketName]: ICattleMarketInfo };

export default CattleMarketInfos;
