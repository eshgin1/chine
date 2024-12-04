const arr = [
    {rusName: ' Кусторез', chineName: '灌木铲除机', transcription: 'gē guànjī', value: '割灌机是拖拉机的附件，设计用于从灌木和灌木丛中清除侧面区域', img: 'https://autobau.ru/sites/default/files/imagecache/lightbox/srg_galerija_001.jpg'},
    {rusName: 'Корчеватель', chineName: '挖根机', transcription: 'wāgēn jī', value: '除根机是拖拉机的附件，设计用于拔除树桩、清除根部和石头（巨石）的坚固区域、清洁用割灌机切割的树干和灌木', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZRncD_c90S5CAFlaQvHId6iQbxBzRabmwQ&s'},
    {rusName: 'Рыхлитель', chineName: '松土器 ', transcription: 'sōngtǔqì ', value: '专为重土、多石土和冻土的初步松土而设计的施工机械', img: 'img/Рыхлитель.jpg'},
    {rusName: 'Автогрейдер', chineName: ' 平地机', transcription: 'píngdì jī', value: '是一种带有长铲刀的重型机械设备，用于土地或者道路平整中。', img: 'img/Автогрейдер.jpg'},
    {rusName: 'Бульдозер', chineName: '推土机', transcription: 'tuītǔjī ', value: '種工程車輛，前方裝有大型的金屬推土刀，使用时放下推土刀，向前铲削并推送泥、沙及石塊等，推土刀位置和角度可以调整，以适应铲土、填土等工作，亦可用以清除障碍物', img: 'img/Бульдозер.jpg'},
    {rusName: 'Гидромонитор ', chineName: ' 水力挖掘机', transcription: 'shuǐlì wājué jī ', value: '是一种 露天采矿设备，通过定向射流提取岩石并将其送入管道 '},
    {rusName: 'Грейдер-элеватор ', chineName: '平地机 ', transcription: 'píngdìjī diàntī ', value: '用于逐层挖掘土壤并将其倾倒到垃圾场或车 辆中的连续机器'},
    {rusName: ' Землесосный снаряд', chineName: '绞吸式挖泥船 ', transcription: 'jiǎoxīshì wā ní chuán ', value: ' 设计用于在水下松动岩石 并将纸浆运送到水力垃圾场的连续动作的浮式土方机械'},
    {rusName: ' Скрепер', chineName: '铲运机 ', transcription: ' chǎnyùn jī', value: '种土方机械，其工作体为 铲斗形式，可将泥土收集在铲斗中并移动， 进行逐层切割，并粗略布置 展开面。'},
    {rusName: 'Экскаватор ', chineName: ' 挖土机', transcription: 'wātǔjī ', value: ' 是一種特殊的工程 車輛，是由旋轉平台、大型鏟子以及機械手臂組成。一般是以履帶或車 輪行進。'},
    {rusName: 'Экскаватор одноковшовый ', chineName: ' 单斗挖掘机', transcription: 'dāndòu wājué jī ', value: ' 在履带式或气轮式底盘上的自行式土方机械，使 用 1 个铲斗作为工作体'},
    {rusName: 'Экскаватор многоковшо́вый ', chineName: ' 多斗挖掘机', transcription: ' duō dǒu wājué jī', value: ' 连续动作的自行式推土机，分层 开发土壤，同时将其运至 垃圾场或通过公路运输。提供链条 和旋转版本。'},
    {rusName: ' Экскаватор ро́торный', chineName: '斗轮挖掘机 ', transcription: 'dòu lún wājué jī ', value: ' 种挖掘机，设计用于挖掘具有大量土方的长沟， 主要是在定居点之外，当不需要经常将机器从一个区域转移到另 一个区域时。它由拖拉机和工作机构 - 转子组成'},
    {rusName: ' Экскаватор цепно́й', chineName: ' 链式多斗挖掘机', transcription: 'liàn shì duō dǒu wājué jī ', value: '种基于气动轮和履 带式拖拉机的挖掘机，设计用于挖掘沟渠，铺设各种用途的电缆和小直 径管道。'},
    {rusName: 'Виброплита ', chineName: ' 平板夯', transcription: 'píngbǎn hāng ', value: ' 手持式设备， 设计用于通过从安装发动机的板上向土壤传递振动来压实土壤。'},
    {rusName: 'Като́к вибрацио́нный ', chineName: ' 振动式路碾', transcription: 'zhèndòng shì lù niǎn ', value: '为土壤压实而设计的牵引式或自行式机器，其工作 主体是一个内部装有激振器的振动辊 '},
    {rusName: ' Като́к стати́ческий', chineName: ' 压路机', transcription: ' yālù jī', value: ' 设计用于逐层压实土壤的牵引式、 半牵引式或自行式机械，使用金属滚筒或带充气轮胎的轮子'},
    {rusName: 'Снегоочисти́тель плу́жный ', chineName: '犁式除雪汽车 ', transcription: 'líshì chúxuě qìchē ', value: '是一个安装在车辆上的设备，用于室 外的清除积雪和冰扫雪机的工作原理是使用一个金属片将雪推到侧面或 直行，从道路表面清除雪 '},
    {rusName: ' Снегоочисти́тель ро́торный', chineName: ' 前置式抛雪机', transcription: 'qiánzhìshì pāoxuějī ', value: ' 种吹雪 机，用于清除道路和机场的积雪，这是由于旋转加速度和沿弹道轨迹 的运动超出了被清除的表面或通过导向叶片进入车身。'},
    {rusName: ' Конве́йер вибрацио́нный', chineName: '振动输送机 ', transcription: ' zhèndòng shūsòng jī', value: '种输送机，其工作原理是基于工作载体的摆动运动。振动输送机设计用 于在水平、倾斜或垂直方向上输送细小、松散和块状物料。 '},
    {rusName: ' Конве́йер ковшо́вый', chineName: '斗式运输机 ', transcription: 'dòu shì yùnshūjī ', value: ' 将桶中物料沿垂直或倾斜 方向移动至最高 50 m 高度的输送机。'},
    {rusName: ' Конве́йер ле́нточный', chineName: ' 带式输送机', transcription: 'dài shì shūsòng jī ', value: '连续输送装置，工作体呈 带状，用于水平或倾斜输送各种物料。'},
    {rusName: 'Конве́йер пласти́нчатый ', chineName: ' 板式给料机', transcription: 'bǎnshì gěi liào jī ', value: '设计用于运输具有锋 利边缘的物料，例如，用于将大尺寸石料送入建筑公司的破碎机、热材 料、零件和产品中 '},
    {rusName: ' Конве́йер скребко́вый', chineName: ' 刮板斗式输送机', transcription: ' guā bǎn dòu shì shūsòng jī', value: ' 各种链条牵引体 输送机'},
    {rusName: ' Погру́зчики одноковшо́вые и многоковшо́вые', chineName: ' 单斗和多斗装载机', transcription: ' Dān dǒu hé duō dòu zhuāngzǎi jī', value: '用于开发、装载和移动散装小材料和土壤的自行 式机器 '},
    {rusName: 'Самосва́л ', chineName: ' 自卸卡车', transcription: ' zì xiè kǎchē', value: ' 车身自卸车'},
    {rusName: ' Автобетононасо́с', chineName: '混凝土泵车 ', transcription: ' hùnníngtǔ bèng chē', value: ' 用于使用动臂或库存混凝土卡车 将新拌混凝土垂直或水平运输到铺设现场的自行式机器'},
    {rusName: ' Автобетоносмеси́тель', chineName: ' 搅拌运送汽车', transcription: ' Jiǎobàn yùnsòng qìchē ', value: ' 种专用车辆，用于将水泥从水泥厂和电梯运 输到建筑工地和建筑行业企业。'},
    {rusName: ' Бетоново́з ', chineName: ' 混凝土車', transcription: ' hùnníngtǔ chē ', value: '用于短距离运输混凝土的带筒仓罐的自 行式机器 '},
    {rusName: ' Виброже́лоб ', chineName: ' 振动式滑槽', transcription: ' zhèndòng shì huá cáo ', value: '种将混凝土混 合物供应到结构中将要铺设的地方的装置。'},
    {rusName: ' Цементово́з ', chineName: '水泥运送汽车 ', transcription: ' Shuǐní yùnsòng qìchē', value: '带罐的专用车辆，用于通过机械、重力或 气动卸载的散装水泥运输。'},
    {rusName: ' Копё́р', chineName: '碎铁机', transcription: ' dǎzhuāng jī ', value: ' 潜水场地移动、安装、引导、打桩专用辅助设备'},
    {rusName: ' Вибромо́лот ', chineName: '震动锤 ', transcription: ' zhèndòng chuí ', value: ' 通过将垂 直振动传递到桩来工作的打桩机'},
    {rusName: ' Мо́лоты дизельные ', chineName: '柴油锤 ', transcription: ' cháiyóu chuí ', value: '以烟气能源为动 力的椰干 '},
    {rusName: ' Мо́лот паровозду́шный ', chineName: '汽风两用锤 ', transcription: ' qì fēng liǎng yòng chuí ', value: '由蒸汽或压缩空气驱动的椰干 '},
    {rusName: ' Кран автомоби́льный ', chineName: ' 汽车吊', transcription: ' qìchē diào ', value: '安装在特殊车辆 底盘上并设计用于执行装卸操作的自行式起重机 '},
    {rusName: ' Кран ба́шенный ', chineName: ' 塔吊', transcription: ' tǎdiào ', value: ' 种起重机械，其中吊臂连接到垂直塔的顶部 ，而垂直塔又可以固定或沿轨道移动'},
    {rusName: ' Кран-ба́лка ', chineName: '梁式起重机 ', transcription: ' liáng shì qǐzhòngjī ', value: ' 沿着安装在建筑物天花板或特殊支架上的起重机跑道移动的桥式起重 机。'},
    {rusName: ' Кран ка́бельный ', chineName: '电缆起重机 ', transcription: ' diànlǎn qǐzhòngjī ', value: '支架顶部 装有吊索的起重机 '},
    {rusName: ' Кран козлово́й ', chineName: ' 龙门吊车', transcription: ' lóngméndiào chē', value: '桥式起重机，桥架借助两条支腿停在跑道上 '},
    {rusName: ' Кран мостовой', chineName: '橋式起重機 ', transcription: ' qiáo shì qǐzhòngjī ', value: ' 桥式起重机及其桥架沿起重机跑道的立交桥移动'},
    {rusName: ' Автобитумовозы ', chineName: ' 沥青运送汽车', transcription: ' lìqīng kǎchē', value: '液态沥青材料运输用加热罐专用车 '},
    {rusName: ' Автогудрана́тор ', chineName: ' 沥青洒布车', transcription: ' lìqīng sǎbù chē', value: '自走式机器设计用于将液体粘合剂均匀分布在加工过的工作带上 '},
    {rusName: ' Асфальторазогрева́тель ', chineName: ' 地沥青加热器', transcription: ' lìqīng hùnníngtǔ bànhéjīī ', value: ' 自走式机器设计用于加热沥青混凝土路面的处理区域，添加新的沥青 混凝土混合物，压实铺设质量，将先前铺设的路面条带与新路面条带配 对'},
    {rusName: ' Асфальтосмеси́тель ', chineName: ' 沥青混凝土拌合机', transcription: ' lìqīng hùnníngtǔ bànhéjīī ', value: '固定式、半固定式或移动式间歇式或连续式沥 青设备 '},
    {rusName: ' Асфальтоукла́дчик ', chineName: ' 地沥青铺设机', transcription: ' dì lìqīng pūshè jī ', value: '在道路和机场路面的安装和维修过程中，用于在准备好的地基上铺设 沥青混凝土和其他沥青矿物混合物的自行式筑路机械 '},
    {rusName: ' Бетоноотде́лочная маши́на ', chineName: ' 溷凝土加工机', transcription: ' hùn níng tǔ jiā gōng jī ', value: ' 专为水泥溷凝土涂层装置设计的自行式道路机器，执行水泥溷凝土 溷合物层平整、密封和精加工作业'},
    {rusName: ' Вибробру́с ', chineName: '熨平板', transcription: 'yùnpíng bǎn', value: '在道路和机场路面施工中压实沙子、水泥混凝土、沥青混凝土和其他 混合物的筑路机械'},
    {rusName: 'Газоструйный снегоочиститель', chineName: '气体喷射吹雪', transcription: 'qìtǐ pēnshè chuīxuě jī', value: '自行 式车辆，用于通过气体喷射的作用巡逻清洁道路和机场的新雪'},
    {rusName: 'Ла́повый снегопогру́зчик', chineName: '爪子雪装载机', transcription: 'zhǎozi xuězhuāng zài jī', value: '种汽车，用于将预先组装成竖井和桩的新落 下和压实的雪和碎冰装载到自卸车的车身中，并通过驾驶室进入无驾驶 汽车'},
    {rusName: 'Маркиро́вочные маши́ны', chineName: '打標機', transcription: 'dǎ biāo jī', value: '設計用於標記預清潔、 乾燥的瀝青和水泥混凝土路面的機器'},
    {rusName: 'Подмета́льно-убо́рочная маши́на', chineName: '扫地机和扫地机', transcription: 'sǎodìjī hé sǎodì jī', value: '在城市道路管理中使用的自行式车辆，用于清洁拥挤的城市条件下的 行人专用区，公园区域，城市高速公路，以及工业和社会区域（火车站 ，工厂领土上的技'},
    {rusName: 'Фреза́ доро́жная', chineName: '道路的铣刀', transcription: 'dàolù de xǐ dāo', value: '自走式、安装式或履带式连续动作的道路机械，其工作体为驱动轴形 式，其上固定有松齿，设计用于松动、压碎土壤并将其与粘合剂混合'},
    {rusName: 'Фре́зерный снегопогру́зчик', chineName: '铣雪装载机', transcription: 'xǐ xuě zhuāngzàijī', value: '铣 削雪装载机具有安装在机器前面的铣削型进料器（相对于机器轴线对称 布置的两个带式刀具）。 给料刀是双向的,有左右螺旋方向. 当机器向前 移动时，雪被切割器的刀片从阵列中分离出来，从轴的右侧和左侧移动 到机器的中心，在那里它进入输送机并被送入车辆。雪地装载机通常是 单发动机，即工作设备和底盘驱动轮的驱动由单发动机驱动。配备装载 溜槽的旋转扫雪机也可用作雪装载机'},
    {rusName: 'Укла́дчик бето́нных плит', chineName: '铺设混凝土板的机 器', transcription: 'pūshè hùnníngtǔbǎn de jīqì', value: '带有起重机形 式的附件的自行式机器，专为铺设和移动路板而设计'},
    {rusName: 'Поли́вочно-мо́ечная маши́на', chineName: '浇水洗衣机', transcription: 'jiāo shuǐ xǐyījī', value: '专为在定居点洒水和清洗道路而设计的公用车辆。 它是一种组合式筑路 机（KDM），配有洒水和冲洗设备'},
    {rusName: 'Парообразова́тель', chineName: '蒸汽发生器', transcription: 'zhēng qì fā shēng qì', value: '移动装置旨在为各种 道路建设工程提供蒸汽移动临时装置：在铁路储罐、坑和其他储存设施 中加热燃料油、沥青和其他粘合剂;混凝土和钢筋混凝土产品的蒸发;在 寒冷季节加热混凝土和砂浆混合物;蒸沥青混凝土搅拌机等的喷射器。 蒸汽发生器也可用于建筑工地的供暖场所'},
    {rusName: 'Маши́на паркетошлифова́льная', chineName: '镶木地板打磨机', transcription: 'xiāngmù dìbǎn dǎmó jī', value: '专为打磨镶木地板和木板地板以及去除木地板覆盖物上 的胶粘剂和油漆涂层而设计的机器'},
    {rusName: 'Форсу́нка штукату́рная', chineName: '抹灰泥的喷燃器', transcription: 'mǒ huīní de pēnrán qì', value: '专为填料含量不超过 5 毫米的石膏砂浆应用而设计的气动装'},
    {rusName: 'Арка́да', chineName: '拱廊是', transcription: 'Gǒng láng shì', value: '个建筑组成的主题，一系列形状和大小相同的拱门放在柱子上或长方形 或正方形的柱子上，并配有壁柱或半柱支撑拱廊的顶部'},
    {rusName: 'Архиво́льт', chineName: '弧形拱', transcription: 'd àng àn', value: '拱形开口的框架，突出拱的弧从墙 的平面'},
    {rusName: 'Две́ри', chineName: '门', transcription: 'mén', value: '在外墙和内墙或 封闭结构的人的通道开口，配备了门板，如有必要， 防火，防火，在疏 散流动的方向开放'},
    {rusName: 'Денти́кулы', chineName: '拱基柱子或墙壁的最后', transcription: 'jiǎyá', value: '部分，以架子或檐口的形式，是位于上方的拱门的支撑'},
    {rusName: 'Ендова', chineName: '恩多瓦', transcription: 'ēn duō wǎ', value: '是连接两个相邻屋顶斜坡的排水沟,用于分流雨水渠'},
    {rusName: 'Золото́е сече́ние', chineName: '黄金分割', transcription: 'huángjīn bǐlì', value: '和谐震级比，数学上 表示为1:1.61'},
    {rusName: 'Импо́ст', chineName: '拱基', transcription: 'zhuǎnyìn', value: '柱子或墙的最后部分，看起来像架子或檐口，是上面拱门的支撑'},
    {rusName: 'Кампани́ла', chineName: '钟塔', transcription: 'zhōngtǎ', value: '在 X-XVII 世纪的意大利建筑中。独立式钟楼：圆形、方形或多面体'},
    {rusName: 'Карту́ш', chineName: '涡卷饰', transcription: 'wōjuǎn shì', value: '种装饰元素，以椭圆形卷轴的形式出现，用于纹章或铭文的图像'},
    {rusName: 'Лопа́тка', chineName: '无帽壁柱', transcription: 'wúmàobì zhù', value: '与壁柱不同，墙的垂直平面投影没有底座和柱头。通常 - 用于垂直划分墙壁平面的装饰元素'},
    {rusName: 'Нервю́ра', chineName: '交叉肋形装饰', transcription: 'jiāochā lèixíng zhuāngshì', value: '哥特式框架拱顶的突出边缘'},
    {rusName: 'Неф', chineName: '中殿', transcription: 'zhōng', value: '寺庙内部空间的结构单元（大教堂或十字形圆顶），由许多柱子或 柱子界定；中殿纵向和横向'},
    {rusName: 'Павильо́н', chineName: '展团', transcription: 'zhǎn tuán', value: '轻质结构'},
    {rusName: 'Па́дуга', chineName: '帕杜加', transcription: 'pà dù jiā', value: '从天花板平面到墙壁平面的平滑过渡'},
    {rusName: 'Парка́н', chineName: '栅栏', transcription: 'zhàlan', value: '内墙和外墙之间的空间'},
    {rusName: 'Па́рус', chineName: '穹隅', transcription: 'qióng yú', value: '拱顶 的一部分，两个拱门之间的天篷'},
    {rusName: 'Переду́вка', chineName: '重吹', transcription: 'chóng chuī', value: '炉 前墙'},
    {rusName: 'Перемы́чка', chineName: '过梁', transcription: 'guo liáng', value: '横跨墙上窗户或门开口的梁或拱形式的结构元素'},
    {rusName: 'Перспекти́вный порта́л', chineName: '隧洞入口', transcription: 'suì dòng rùkǒu', value: '入口开口设计有延伸到深处的相同形状的壁架（柱子上的半圆形拱门 形式）'},
    {rusName: 'Раскрепо́вка', chineName: '柱式', transcription: 'zhù shì', value: '立面平面上的小突起，檐口，檐口等的突起'},
    {rusName: 'Распа́лубка', chineName: '拆除木模', transcription: 'chāichú mù mó', value: '以直角内置于主拱形天花板中的拱顶（例如，用于打开窗户的设备'},
    {rusName: 'Ризали́т', chineName: '凸轩', transcription: 'tūxuān', value: '建筑物的突 出部分'},
    {rusName: 'Рото́нда', chineName: '圆形建筑物', transcription: 'yuánxíng jiànzhù', value: '覆盖着球形圆顶的圆形结构'},
    {rusName: 'Рунду́к', chineName: '储物柜', transcription: 'chǔwù guì', value: '中世纪晚期俄罗斯木石建筑门廊的主要元素；这是一个覆盖区域'},
    {rusName: 'Стереоба̀т', chineName: '殿堂的基座', transcription: 'sìmiào de jīzuò', value: '寺庙或柱廊的地下室。在古希腊，它们通常位于三级台阶上，上 面的台阶称为基台'},
    {rusName: 'Стилоба̀т', chineName: '台基', transcription: 'píngtái jīchǔ', value: '古建筑中—— 柱下石板，上台阶带立体蝙蝠'},
    {rusName: 'Террако̀та', chineName: '赤陶', transcription: 'bīngmǎyǒng', value: '没有搪瓷涂层的烧制粘土块'},
    {rusName: 'Терра̀са', chineName: '阳台', transcription: 'ménláng', value: '建筑物的开放 区域'},
    {rusName: 'Тимпа́н', chineName: '楣饰', transcription: 'méibǎn', value: '门户的前冲，前冲或内部区域（在门口的水平过梁上方）。可以装满 装饰雕塑或绘画'},
    {rusName: 'Торе́ц', chineName: '梁的端面', transcription: 'liáng de duānmiàn', value: '铺路用的石头或木头'},
    {rusName: ' Трансе́пт ', chineName: '教堂）十字路口', transcription: ' jiàohuì shízìlù kǒu ', value: '水平中殿'},
    {rusName: ' Транше́я ', chineName: '管沟', transcription: ' guǎncáo ', value: '地下隧道'},
    {rusName: ' Ту́ла ', chineName: '图拉', transcription: ' tú lā ', value: '隐藏的，无法到达的地方'},
    {rusName: ' Фане́ра ', chineName: ' 合板 ', transcription: ' hébǎn ', value: ' 由几层薄木板粘合在一起制成的人造木建筑材料 '},
    {rusName: ' Фая́нс ', chineName: ' 粗瓷 ', transcription: ' cū cí ', value: ' 白陶 '},
    {rusName: ' Флю́гер ', chineName: ' 相风 ', transcription: ' fēngxiàng biāo ', value: ' 种确定风向和风速的装置，由一块绕垂直于风向的轴旋转的金属板组成'},
    {rusName: ' Фронто́н ', chineName: ' 山墙 ', transcription: ' shānqiáng ', value: ' 建筑物立面的一部分，一个门廊，一个被山墙屋顶和飞檐包围的柱廊 。大多数情况下它是三角形或拱形的。 '},
    {rusName: ' Хо́ры ', chineName: ' 合唱台 ', transcription: ' héchàng tái ', value: ' 寺庙中殿的二层露天画廊，主要在其西部地区；在礼拜期间用作贵族的住所 '},
    {rusName: ' Шатро́вое покры́тие кро́вель ', chineName: ' 帐篷屋顶复盖是 ', transcription: ' zhàngpéng wūdǐng fù gài shì ', value: ' 种古老的斯拉夫方法，以帐篷的形式重叠木制建筑。 '},
    {rusName: ' Шпиль ', chineName: ' 塔尖 ', transcription: ' tǎ jiān ', value: ' 以强烈拉长的锥体或金字塔形式垂直和点状地完成建筑物 '},
    {rusName: ' Шта́бель ', chineName: ' 堆 ', transcription: ' duī ', value: ' 种铺设长长度建筑材料的方法 '},
    {rusName: ' Щипе́ц ', chineName: ' 檐宇 ', transcription: ' yányǔ ', value: ' 墙的最后部分对称地尖或突出，不像山墙饰，与下部没有檐口隔开 '},
    {rusName: ' Экра́н ', chineName: ' 阻声屏隔音板 ', transcription: ' zǔshēng píng géyīn bǎn ', value: ' 抗光、抗噪声等防护结构 '},
    {rusName: ' Экспози́ция ', chineName: ' 曝光 ', transcription: ' pùguāng ', value: ' 博览会是展示的展览。 '},
    {rusName: ' Экстерье́р ', chineName: ' 外部的 ', transcription: ' wàibù de ', value: ' 外部形式，建筑物的外观，立面 '},
    {rusName: ' Эстака́да ', chineName: ' 高架公路 ', transcription: ' gāojià gōnglù ', value: ' 高架、支撑、行人或城市交通结构，以及用于铺设工程通信 '},
    {rusName: ' Эта́ж ', chineName: ' 楼 ', transcription: ' lóu ', value: ' 地板的一部分。 '},
    {rusName: ' Я́рус ', chineName: ' 重 ', transcription: ' zhòng ', value: ' 横排 '},
    {rusName: ' Ар-деко́ ', chineName: ' 艺术装饰 ', transcription: 'yìshù zhuāngshì ', value: ' 20 世纪初在法国兴起的现代主义与新古典主义交界处的一种风格。装饰艺术建筑的主要特征是由弯曲的装饰元素分隔的矩形几何形状。形成阶梯式轮廓的一系列凹槽创造了这种风格外墙的整体外观特征。装饰艺术建筑使用石膏、混凝土砌块、釉面砖、光滑的石头和赤陶、钢和铝。装饰磨砂玻璃应用广泛。平屋顶装饰有栏杆、尖顶或塔楼，以强调角落或入口。为了获得最大的自然光，使用装饰玻璃或玻璃块。错综复杂的壁柱和山形墙装饰着门口。 '},
    {rusName: ' Интернациона́л ', chineName: ' 国际的 ', transcription: ' guójì de ', value: ' 1920、30年代在欧美发展起来的建筑风格，在20世纪中叶成为西方建筑的主流。以国际风格建造的建筑最具特色的建筑细节是它们的直线形式；轻盈、干净和光滑的表面，完全没有装饰和装饰；开放的室内空间和从中散发出来的失重感，是通过使用悬臂结构实现的。 （钢筋混凝土安装在金属支架上）实现。玻璃和钢铁，以及传统上较少装饰的钢筋混凝土，是典型的建筑材料 '},
    {rusName: ' Ампи́р  ', chineName: ' 帝国 ', transcription: ' dìguó  ', value: ' 历史的艺术风格，这成为普遍在西欧，部分，在俄罗斯，在十九世纪的前三分之一，主要是在建筑，室内设计和装饰和应用艺术。 它起源于拿破仑*波拿巴统治时期的法国。 这是经典的"皇家"艺术风格中的最后一种，被十九世纪下半叶的历史主义，新主义和折衷主义时期的艺术所取代。 '},
    {rusName: ' Средневеко́вая архитекту́ра ', chineName: '中世纪建筑', transcription: ' zhōngshìjì jiànzhù ', value: ' 它是中世纪常见的建筑，包括宗教，民用和军事建筑。 风格包括前罗马式，罗马式和哥特式。 虽然大多数保存完好的中世纪建筑都可以在教堂和城堡中看到，但在整个欧洲，庄园，市政厅，救济院，桥梁和住宅建筑中可以找到民用和国内建筑的例子。 '},
    {rusName: ' Рококо́ ', chineName: '洛可可', transcription: ' luò kěkě ', value: ' 洛可可風格出現在 18 世紀上半葉奧爾良攝政王菲利普 (1715-1723) 統治時期的法國。洛可可建築正在失去其規模、宏偉和對神的崇拜，轉而關注個人利益具有精緻的品味。 在洛可可式中，建築師較少關注功能和形式的組合。 裝飾基於不對稱、平面劃分的可變性、細節過多。 洛可可建築風格傾向於遠離直線。 柱子執行美學功能，它們變得更窄，改變它們相對於建築物尺寸的比例尺寸。 屋頂邊緣有欄杆，其特點是有花紋的欄杆、帶花瓶或雕像的基座。宮殿的牆壁上也裝飾著城市景觀，尤其是真實準確地描繪了威尼斯的景色，特別受歡迎。 在洛可可風格的調色板中，淺色、柔和的顏色：粉紅色、沙拉色、藍色、大量白色和金色細節。'},
    {rusName: ' Индо-исламский стиль ', chineName: ' 印度伊斯蘭建築 ', transcription: ' Yìndù-yīsīlán fēnggé ', value: ' 印度伊斯蘭建築的發展從基礎開始認真 1193年德里成為古里德王朝的首都。大型建築物的類型和形式與以前在印度建造的建築物有很大不同。 兩座神廟的外部都經常頂部有大圓頂，拱門也被廣泛使用。 這兩個特徵幾乎沒有用於印度教寺廟建築和其他印度本土風格。 這兩種類型的建築基本上都由高圓頂下的一個大空間組成，完全避開了對印度教寺廟建築如此重要的具象雕塑。 '},
    {rusName: ' Постмоде́рн ', chineName: ' 后现代建筑是 ', transcription: ' hòu xiàndài de ', value: ' 种风格或运动，出现在20世纪60年代，作为对现代建筑的严谨性，形式性和缺乏多样性的反应，特别是在勒柯布西耶和路德维希密斯范德罗 这一运动是由建筑师和城市规划师丹尼斯*斯科特*布朗和建筑理论家罗伯特*文丘里在他的着作《从拉斯维加斯学习》中介绍的。 '},
    {rusName: ' По́здний моде́рн ', chineName: ' 晚期现代 ', transcription: ' wǎnqí xiàndài ', value: ' 晚现代是由国家历史名胜名录定义的现代建筑的一个阶段。 晚期现代风格包括流线型现代风格和国际风格的元素。 第一个例子可以在20世纪30年代末看到，但晚期现代主义在20世纪50年代末和60年代的大型政府和商业建筑中达到了顶峰。'},
    {rusName: ' Брутали́зм ', chineName: ' 粗野主义 ', transcription: ' cūyě zhǔyì ', value: ' 1950 年代出现的一种建筑趋势，作为对战后时期挑战的回应。轰炸后，整个城市和大片街区被摧毁。数百万幸存者无家可归。地缘政治地图正在重新绘制，重新绘制——新的人民需要新的城市，解放土地的首都。粗野主义已经成为一种新的建筑哲学。诚实，原材料，没有油漆，没有石膏。混凝土在表面保留了浇铸构件的木模板。 '},
    {rusName: ' Ра́нний моде́рн ', chineName: ' 近代早期 ', transcription: ' jìndài zǎoqí ', value: ' 几种具有相似特征的建筑趋势的结合，主要有助于简化形式和完全拒绝装饰元素。在很多情况下，夸大技术和工程的作用导致了他们对机械化的迷恋和钦佩。尽管这种建筑得到了许多有影响力的建筑师的支持，但在 20 世纪上半叶建造的现代主义建筑并不多。'},
    {rusName: ' Баро́кко ', chineName: ' 巴洛克風格 ', transcription: ' bā luò kè fēng gé ', value: ' 16-17 世紀歐洲藝術和建築的風格。 它的特點是注重細節、符號和寓言、宏偉的構圖、誇張、情緒化、排場、華麗、曲線和豐富的裝飾。 '},
    {rusName: ' Минимали́зм ', chineName: ' 極簡主義 ', transcription: ' jí jiǎn zhǔ yì ', value: ' 建築風格，它包含這樣一個事實，即所創建對象的每個組件都執行盡可能多的功能——任何裝飾或非承重元素都被排除在外。 美是通過使用自然紋理和幾何形狀作為輪廓和引導，以及通過光影的發揮來創造的。 '},
    {rusName: ' Го́тика ', chineName: ' 哥特式 ', transcription: ' gē tè ', value: ' 中世纪成熟期和晚期常见的一种神圣和世俗建筑 '},
    {rusName: ' Экспрессион́изм ', chineName: ' 表现主义 ', transcription: ' biǎoxiàn zhǔyì ', value: ' 第一次世界大战和 1920 年代德国、荷兰和邻国的建筑，其特点是对传统建筑形式的扭曲，以达到对观众最大的情感影响 '},
    {rusName: ' Византийски́й стиль ', chineName: ' 拜占庭式的 ', transcription: ' bàizhàntíngshì de ', value: ' 从四世纪初到十五世纪中叶，罗马帝国晚期和拜占庭的建筑和建筑传统的整体。 拜占庭的宗教建筑，拜占庭的防御工事和土木工程，包括宫殿，公共建筑和私人住宅，被挑出来作为单独的研究领域。 此外，在该学科的框架内，研究了建筑工艺和装饰艺术的传统。 '},
    {rusName: ' Хай-те́к ', chineName: ' 高科技 ', transcription: ' gāo kējì ', value: ' 种当代建筑和设计风格，使用玻璃、金属和混凝土等先进技术和材料来创造强烈的几何形状和简洁的线条。这种风格还以使用智能设备、自动控制系统以及极简主义的家具和装饰方法而闻名。强调功能性和人体工程学，同时又不牺牲优雅和风格。 '},
    {rusName: ' Армату́ра ', chineName: ' 钢筋 ', transcription: ' gāngjīn ', value: ' 用于吸收张力的钢筋混凝土结构组件。通常使用钢，在某些情况下使用非金属。 '},
    {rusName: ' Баля́сины ', chineName: ' 栏杆柱 ', transcription: ' lángǎn zhù ', value: ' 楼梯、阳台、露台、承重栏杆外壳的元素。'},
    {rusName: ' Брусо́к ', chineName: ' 方木 ', transcription: ' fāng mù ', value: ' 厚度小于 100毫米的锯材，具有棒材的综合性能 '},
    {rusName: ' Ве́нец  ', chineName: ' 木垛盘 ', transcription: ' mùduǒ pán  ', value: ' 构成一排水平木框的原木或横梁。 '},
    {rusName: ' Забо́р ', chineName: ' 圍欄 ', transcription: ' wéi lán ', value: ' 聋人冰雹，通常比人高 '},
    {rusName: 'Каннелюры ', chineName: '凹槽 ', transcription: 'āo cáo', value: '立柱或立柱（这种立柱被称为凹槽）的立柱（树干）上的垂直凹槽'},
    {rusName: 'Конек', chineName: '屋脊', transcription: 'wū jí', value: '建筑物屋顶的结构元素，其最上部'},
    {rusName: 'Контрфорс', chineName: '扶壁', transcription: 'fú bì', value: '位于墙外侧并承受横向推力的垂直支撑。扶壁的横截面随着它以三角 形或阶梯形式接近底部而增加'},
    {rusName: 'Косоур', chineName: '承重楼梯梁', transcription: 'Chéng chóng lóutī liáng', value: '倾斜的承重 梁，楼梯的台阶搁在上面'},
    {rusName: 'Кружа́ла', chineName: '拱架', transcription: 'gǒng jià', value: '木模板支撑模板，在其上架设拱门、拱门和圆顶，以及壁炉的拱形部 分'},
    {rusName: 'Лаги', chineName: '横梁', transcription: 'héng liáng', value: '原木、横梁或金属横梁，水平放置并支撑建筑物或场 地的地板'},
    {rusName: 'Матица', chineName: '马蒂卡', transcription: 'mǎ dì kǎ', value: '木结构中支撑楼板的主梁'},
    {rusName: 'Мауэрлат', chineName: '木骨架的顶木条', transcription: 'mù gǔjià de dǐng mù tiáo', value: '用作分层木椽支撑的梁，旨在分配建筑物屋顶产生的荷载。它位于石 墙的上部内缘'},
    {rusName: 'Нагель', chineName: '木钉', transcription: 'mù dīng', value: '用于固定（胶合）木质结构件的木杆或金属杆'},
    {rusName: 'Накат', chineName: '滚压', transcription: 'Gǔn yā', value: '地板横梁上有绝缘层'},
    {rusName: 'Нервюры', chineName: '墙式翼肋', transcription: 'Qiáng shì yì lē', value: '拱顶的肋骨形成框架，简化拱顶的砖石结构并减少其膨胀'},
    {rusName: 'Обрешетка', chineName: '木檩条', transcription: 'Mù lǐntiáo', value: '横跨椽子的条、板、杆等，用于在其上铺设地板屋顶材料'},
    {rusName: 'Отмостка', chineName: '散水坡', transcription: 'Sànshuǐ pō', value: '种从地基中排水的装置'},
    {rusName: 'Пазуха свода', chineName: '斯潘德雷尔', transcription: 'Sī pāndéléi ěr', value: '相邻拱顶外表面之间或拱顶与墙壁之间的空间'},
    {rusName: 'Парапет', chineName: '女儿墙', transcription: 'Nǚér qiáng', value: '围 绕屋顶、梯田、阳台、堤防、桥梁等的矮墙'},
    {rusName: 'Тетива', chineName: '弓弦', transcription: 'gōngxián', value: '楼梯承重结构'},
    {rusName: 'Перекрытия', chineName: '楼板', transcription: 'Lóubǎn', value: '(结构的结构部分将其分为楼层，感应临时荷载并将 其转移到水平（横 杆）或垂直承重元件'},
    {rusName: 'Перемычка клинчатая', chineName: '楔形过梁', transcription: 'Xiēxíngguò liáng', value: '它是一个扁平的拱形门楣，内衬放射状或楔形砖。楔形 套头衫采用拱形设计。楔形棒也用于炉子，特别是在壁炉的建造中'},
    {rusName: 'Перемычка', chineName: '例如', transcription: 'Lìrú', value: '是建筑中的任何曲面，包 括一个[建] 喇叭形拱'},
    {rusName: 'Перила', chineName: '栏杆', transcription: 'lángǎn', value: '楼梯、阳台、露台、路堤、桥梁的各种配置的栏杆高约一米'},
    {rusName: 'Перон', chineName: '梁托', transcription: 'liángtuō', value: '低矮的石头露台，台阶毗邻建筑'},
    {rusName: 'Пилон', chineName: '塔柱', transcription: 'tǎzhù', value: '在某些类型的结构中（例如，在地下地铁站中）作为平坦或拱形天花 板的支撑或支撑悬索桥中的主要（承重）电缆的大横截面的支柱'},
    {rusName: 'Пиля́стра', chineName: '壁柱', transcription: 'bì zhù', value: '横截面为矩形的扁平垂直壁架，通常带有底部和顶部'},
    {rusName: 'Подбалки', chineName: '(技>撑杆', transcription: 'jì chēnggǎn', value: '根杆，位于支撑柱和承载梁之间'},
    {rusName: 'Подко́с', chineName: '支撑', transcription: 'zhīchēng', value: '建筑结构中斜梁的压缩'},
    {rusName: 'Полуколонна', chineName: '半栏', transcription: 'bànlán', value: '圆柱，平面上通常为半圆形，从墙平面突出其直径的一半'},
    {rusName: 'Пото́к', chineName: '洪流', transcription: 'hóngliú', value: '带有空心排水沟的原木，用于从屋顶 排水，同时支撑屋顶甲板的下'},
    {rusName: 'Ри́гель', chineName: '圈栏', transcription: 'quānlán', value: '建筑结构水平承重构件'},
    {rusName: 'Сва́и', chineName: '灌注桩', transcription: 'guànzhù zhuāng', value: '将建筑物荷 载转移到距离地表更远的地基的地基类型，而不是将浅地基转移到地下 层或一定深度范围内的地基'},
    {rusName: 'Сво́ды', chineName: '金库', transcription: 'jīnkù', value: '用于覆盖房间的曲线建 筑结构'},
    {rusName: 'Скат', chineName: '屋面坡度', transcription: 'xiédào', value: '屋顶倾斜的一面'},
    {rusName: 'Сле́ги', chineName: '躺下', transcription: 'shuìjué', value: '水平放置并用于固定椽子的干木材或原木'},
    {rusName: 'Сто́йка', chineName: '支杆', transcription: 'bàngōngzhuō', value: '垂直或倾斜结构，用于设计和施工'},
    {rusName: 'Сто́йка железобето́нная', chineName: '钢筋混凝土管架', transcription: 'gāngjīn hùnníngtǔ zhījià', value: '用于建设架空电力线、铁路接触网的结构元件。以及城市电气化交通 、照明、通信等，其上安装有用于悬挂电线和照明灯具的支撑结构'},
    {rusName: 'Стропи́ла', chineName: '双披屋架', transcription: 'chuánzi', value: '斜屋顶的承重结构'},
    {rusName: 'Тегу́ла', chineName: '翅基片', transcription: 'tègǔ lā', value: '屋瓦'},
    {rusName: 'Торе́ц', chineName: '梁的端面', transcription: 'duānmiàn', value: '设计用于地板或铺路的矩形或六角形短条'},
    {rusName: 'Трелья́ж', chineName: '三扇镜', transcription: 'géjià', value: '用于攀缘植物的轻质格架'},
    {rusName: 'Трехчетвертна́я коло́нна', chineName: '四分之三专栏', transcription: 'sìfēnzhīsān zhuān lán', value: '从墙平面突出其直径 3/4 的柱子'},
    {rusName: 'Уко́сина', chineName: '悬臂', transcription: 'xuánbì', value: '支撑，倾斜支撑柱'},
    {rusName: ' Фахве́рк ', chineName: ' 骨架 ', transcription: 'gǔjià ', value: '由相互连接的机架、横梁和支撑组成的框架系统'},
    {rusName: 'Ферма стропильная ', chineName: '屋架梁', transcription: 'wūjià liáng', value: '用于覆盖大 跨度的格子承重结构'},
    {rusName: ' Черепица', chineName: '筒子瓦 ', transcription: ' tǒngzi wǎ', value: '由烧粘土、金属或塑料制成 的片状屋顶材料 '},
    {rusName: 'Штапик ', chineName: '镶条 ', transcription: 'xiāngtiáo ', value: '用于固定插入四分之一的 窗格或面板的杆 '},
    {rusName: 'Эпистиль ', chineName: '书信体 ', transcription: ' shūxìn tǐ', value: ' 梁结构的下部，直接靠在支架上'},
    {rusName: 'Авантюриновые стёкла ', chineName: '前卫的玻璃 ', transcription: ' [qiánwèi de bōli', value: '由于铬、铁、铜化合物的小结晶夹杂物而具有闪烁效果的有色玻璃。 '},
    {rusName: 'Битум ', chineName: '(沥青 ', transcription: 'lìqīng ', value: '它是一种固体或焦油状产品，是碳 氢化合物及其含氮、含氧、含硫和含金 属衍生物的混合物。 '},
    {rusName: 'Гипс ', chineName: '石膏 ', transcription: 'shígāo ', value: ' 它是一种矿物，经过开采 和加工，广泛用于工业、建筑、修理、医药、雕塑材料等。'},
    {rusName: ' Горбы́ль ', chineName: '驼背 ', transcription: ' tuóbèi ', value: ' 锯原木时，它是一种废物，是树干的一部分。加工棒材或板材时，从四个侧面切割工件，获得矩形截面。 该材料一方面保留了树木的自然表面 ，另一方面具有锯切平面。'},
    {rusName: ' Графи́т ', chineName: '石墨 ', transcription: ' shímò ', value: '它目前用于许多工业领域，包括建筑。在这里，类似的材料用作附加 化合物或物质，可以保护金属结构或玻璃免受腐蚀过程的有害影响。 '},
    {rusName: ' И́звесть ', chineName: '石灰石 ', transcription: ' shíhuī shí ', value: ' 生产硅酸盐砖、气灰混凝土砌块、石灰砂浆的主要成分之一。'},
    {rusName: ' Каучу́ковые кра́ски ', chineName: ' 橡胶漆', transcription: ' xiàngjiāo qī ', value: '它是氯化橡胶与颜料在挥发性溶剂中的分散体。它们高度防水。它们用 于保护金属和混凝土材料的腐蚀。 '},
    {rusName: ' Кли́нкерная пли́тка ', chineName: '熟料砖 ', transcription: ' shú liào zhuān ', value: '它是石灰石、粘土和矿渣的烧结混合物经高温焙烧和随后研磨的产物。 '},
    {rusName: ' Керамопла́ст ', chineName: ' 角质层', transcription: ' jiǎo zhí céng ', value: '用作私人地块或建筑物的围栏，用于建造小型附属建筑，各种表面的“电镀 '},
    {rusName: ' Мра́мор ', chineName: '大理石 ', transcription: ' dàlǐshí ', value: '由方解石晶粒组成的岩石，在某些情况下 – 与碳酸镁的混合物，有时达到纯白云石的成分。 '},
    {rusName: ' Минера́льная ва́та ', chineName: '(矿棉 ', transcription: ' kuàng mián ', value: '它是一种从岩石熔体以及冶金矿渣及其混合物中获得的纤维材料。 '},
    {rusName: ' Мета́лл ', chineName: '金属 ', transcription: ' jīnshǔ ', value: '这是一种结构材料，是人类活动各个领域中使用的金属和各种合金结构的总称：建筑、机床、大型设备、机械、仪器等。在机械工程中，金属结构通常是指由异型金属制成的零件，不同于铸件和锻件。 '},
    {rusName: ' Полиме́рные масти́ки ', chineName: '高分子塑料 ', transcription: ' gāo fēnzǐ sùliào ', value: ' 这些是通过将有机粘合剂与精细分散的填料和特殊添加剂混合而获得的材料。'},
    {rusName: ' Пеностекло́ ', chineName: ' 泡沫玻璃', transcription: ' Pàomò bōlí ', value: '隔热材料，它是一种泡沫玻璃块。 '},
    {rusName: ' Пергамин ', chineName: '佩加蒙 ', transcription: ' Pèi jiā méng ', value: '用石油沥青浸渍屋面纸获得的未涂布卷材。 '},
    {rusName: ' Полиэтилен ', chineName: '聚乙烯 ', transcription: ' Jù yǐxī ', value: ' 它是一种用于制造蒸汽阻隔膜的材料'},
    {rusName: 'Полимербето́н ', chineName: ' 聚合物混凝土', transcription: ' jùhé wù hùnníngtǔ ', value: '这是一种特殊类型的材料，其 中聚合物树脂代替水泥发挥粘合剂的作用'},
    {rusName: ' Столя́рные пли́ты ', chineName: ' 木工板', transcription: ' Mùgōng bǎn ', value: ' 这些板由两面粘贴的板条防护罩组成，单板分为一层或两层。平板可以在一侧 或两侧饰以切片单板，打磨或不打磨。'},
    {rusName: ' Стекломра́мор ', chineName: ' 玻璃大理石', transcription: ' Bōlí dàlǐshí ', value: '带有大理石花纹的不透明彩色玻璃 '},
    {rusName: ' Стеклобло́к ', chineName: '玻璃砖 ', transcription: ' bōlizhuān ', value: '块正确形状的空心建筑材料，由玻璃制成。 '},
    {rusName: ' Стеклова́та ', chineName: '玻璃棉 ', transcription: ' bōlí mián ', value: ' 纤维矿物保温材料，一种矿棉。'},
    {rusName: ' Свине́ц ', chineName: ' 带领', transcription: ' dàilǐng ', value: '它是一种金属，在建筑中经常用作屋顶、飞檐、储罐的材料以及电线的组成元素。 '},
    {rusName: ' Толь ', chineName: ' 只要', transcription: ' zhǐ xū ', value: ' 用煤焦油或页岩焦油产品浸渍屋面纸制得的屋面防水材料。'},
    {rusName: ' Эма́левые кра́ски ', chineName: ' 搪瓷漆', transcription: ' tángcí qī ', value: ' 主要用于室外油漆工作，以及室内装饰材料。这些油漆是由生漆、 颜料和其他成分组成的，它们的漆膜通常是有光泽的。'},
    {rusName: ' Экова́та ', chineName: '埃科瓦塔 ', transcription: ' Āi kē wǎ tǎ ', value: '松散的轻质纤维结构绝缘材料，灰色或浅灰色，用作绝缘材料。 '},
    {rusName: ' Армату́ра ', chineName: ' 衔铁', transcription: ' xiántiě ', value: '这些是用于建造钢筋混凝土结构的金属棒。 '},
    {rusName: ' Цеме́нт ', chineName: '水泥 ', transcription: ' shuǐní ', value: '它是一种人造无机水硬性粘合剂。最重要的建筑材料之一。 '},
    {rusName: ' Песо́к ', chineName: ' 沙', transcription: ' Shā ', value: '这是岩石在风、地壳运动和其他自然影响的作用下被破坏而形成的松散物质。 '},
    {rusName: ' Ще́бень ', chineName: '瓦砾 ', transcription: ' wǎlì ', value: ' 它是一种无机非圆形散装材料，呈各种分数的颗粒形式。'},
    {rusName: ' Отсе́в ', chineName: '筛余 ', transcription: ' shāi ', value: '这是一种材料，是碎石制造过程中的副产品，通过破碎和筛选岩石、 二次碎石、石灰石获得。 '},
    {rusName: ' Керамзи́т ', chineName: '膨胀粘土 ', transcription: ' péngzhàng niántǔ ', value: '它是一种略微多孔的建筑材料，是一种通过低熔点回转窑烧制得到的颗粒状混凝土填料。  '},
    {rusName: ' Кирпи́ч ', chineName: ' 砖', transcription: ' zhuān ', value: ' 通过燃烧粘土或硅酸盐物质获得的碎片。'},
    {rusName: ' Бло́к ', chineName: '砌块 ', transcription: ' qì kuài ', value: ' 它是具有特定尺寸的建设性预制构件或产品，通常由工厂制造并用于现代工业建筑。'},
    {rusName: ' Пли́ты ', chineName: '楼板 ', transcription: ' lóubǎn ', value: '这些是预制钢筋混凝土结构，用于结构中的中间地板和屋顶 '},
    {rusName: ' Ши́фер ', chineName: '石绵瓦 ', transcription: ' shí mián wǎ ', value: '这是一种屋面材料，是石棉水泥板，有平面和波浪形 '},
    {rusName: ' Пенобло́к ', chineName: '泡沫混凝土块 ', transcription: ' pàomò hùnníngtǔ kuài ', value: ' 泡沫混凝土组成的建筑材料，它是由普通水泥砂浆、沙子和水加入发泡剂制成的。'},
    {rusName: ' Гипсокарто́н ', chineName: ' 石膏板', transcription: ' shígāo bǎn ', value: '它是一种用于覆盖墙壁、天花板和创建隔断的建筑材料 '},
    {rusName: ' Древесина ', chineName: ' 木头', transcription: ' Mùtou ', value: '木头-是建造各种复杂建筑物的主要建筑材料之一 '},
    {rusName: 'Шве́ллер ', chineName: '槽钢 ', transcription: ' cáo gāng ', value: '具有U形横截面的建筑构件的滚动轮廓。 '},
    {rusName: ' Фане́ра ', chineName: '合板 ', transcription: ' hébǎn ', value: '由三层或更多层旋切单板组成的层压材料。 '},
    {rusName: ' Древе́сные пла́стики ', chineName: ' 木塑', transcription: ' mù sù ', value: '在高温高压下加工的板材、横梁等木材，或通过热压浸渍聚合物溶液的剥离单板薄板获得的大尺寸板材和板材。 '},
    {rusName: ' Керами́ческие кра́ски ', chineName: ' 陶瓷涂料', transcription: ' táocí túliào ', value: ' 耐热矿物颜料与熔融玻璃或陶瓷块和釉料的混合物。'},
    {rusName: 'Стемали́т ', chineName: '釉面玻璃 ', transcription: ' liáng miàn liúlí ', value: '平板玻璃板，其内部涂有陶瓷漆。 '},
    {rusName: ' Марбли́т ', chineName: ' 大理石纹玻璃', transcription: ' dàlǐshí wén bōlí ', value: '材料呈扁平矩形或方形板的形式，正面抛光，内表面呈波纹状。它由覆盖的彩色玻璃制成。 '},
    {rusName: ' Эмалиро́ванные пли́тки ', chineName: '涂瓷漆的花砖 ', transcription: ' tú cíqī de huāzhuān ', value: '由窗户或陈列柜玻璃废料制成，切割成一定尺寸并在一侧涂上一层在热处理过程中固定的搪瓷。 '},
    {rusName: ' Сма́льта ', chineName: '彩色玻璃 ', transcription: ' cǎisè liúlí ', value: ' 厚度达 10 毫米的不透明有色玻璃块，由玻璃块通过铸造或压制获得。'},
    {rusName: ' Лино́леум ', chineName: '油毡 ', transcription: ' yóuzhān ', value: '一种用作成品地板覆盖物的材料， 通过挤出或压延工艺制成，以生产基于聚氯乙烯聚合物与填料、增塑剂和着色剂的混合物。 '},
    {rusName: ' Изо́л ', chineName: '防水毡 ', transcription: ' fángshuǐ shuān ', value: '通过轧制由脱硫橡胶、石油沥青、矿物填料、防腐剂和增塑剂组成的沥青-橡胶混合物而获得的无基轧材。 '},
    {rusName: ' Гидроби́тул ', chineName: '氢化沥青 ', transcription: ' yǎnghuà ní qīng ', value: '基于丁基橡胶的无基材料。 '},
    {rusName: ' Би́тумные ла́ки ', chineName: ' 沥青清漆', transcription: ' ní qīngqīng qī ', value: '沥青在挥发性溶剂中的胶体溶液。黑色沥青漆膜。它们用于金属表面的防腐涂层。 '},

]

const button = document.querySelector('button')
const input = document.querySelector('input')
const wrapper = document.querySelector('.card-body') 
let translateResult = document.querySelector('.translate-result span')
let transcriptionResult = document.querySelector('.transcription-result span')
let descptionResult = document.querySelector('.descption-result span')


button.addEventListener('click', (event) => {
    const inputValue = input.value;

    arr.forEach((item) => {
        const normalizedRusName = item.rusName.replace(/́/g, '');
        if (normalizedRusName.trim().toLowerCase() === inputValue.toLowerCase()) {
            translateResult.textContent = item.chineName
            transcriptionResult.textContent = item.transcription
            descptionResult.textContent = item.value
        }
        if(item.img && normalizedRusName.trim().toLowerCase() === inputValue.toLowerCase()) {
            const div = document.createElement('div')
            div.classList.add('image-container')
            const img = document.createElement('img')
            img.style.width = '70%'
            img.src= item.img
            img.alt = item.rusName
            div.appendChild(img)
            wrapper.appendChild(div)
        }
    })


});

input.addEventListener('input', (event) => {
    const existingImageDiv = wrapper.querySelector('.image-container');
    
    if (event.target.value.trim() === '') {
        translateResult.textContent = '';
        transcriptionResult.textContent = '';
        descptionResult.textContent = '';
        if (existingImageDiv) {
            existingImageDiv.remove();
        }
    } else {
        // Если значение не пустое, проверяем на соответствие
        arr.forEach((item) => {
            if (item.rusName.toLowerCase().includes(event.target.value.toLowerCase())) {
                translateResult.textContent = '';
                transcriptionResult.textContent = '';
                descptionResult.textContent = '';
                if (existingImageDiv) {
                    existingImageDiv.remove();
                }
            }
        });
    }
})
