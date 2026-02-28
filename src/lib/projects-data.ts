// Project Data for Referanslar (References) Page

export interface Project {
    id: number;
    title: string;
    category: string;
    location: string;
    year: number;
    image: string;
    description: string;
    fullDescription: string;
    tags: string[];
    services: string[];
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Yavuz Sultan Selim Köprüsü Dekoratif Aydınlatma',
        category: 'Altyapı',
        location: 'İstanbul',
        year: 2023,
        image: '/projects/yss-kopru.jpg',
        description: 'Köprü askı kablolarında LED aydınlatma kurulumu ve periyodik bakım hizmeti',
        fullDescription: 'Yavuz Sultan Selim Köprüsü\'nün askı kablolarına dinamik LED aydınlatma sistemi kurulumu gerçekleştirilmiştir. Proje kapsamında 200+ noktada özel tasarım aydınlatma armatürleri ile iple erişim tekniklerini kullanarak montaj yapılmıştır.',
        tags: ['LED Aydınlatma', 'Köprü', 'İple Erişim'],
        services: ['dis-cephe-dekoratif-aydinlatma']
    },
    {
        id: 2,
        title: 'Çanakkale RES Türbin Bakımı',
        category: 'Enerji',
        location: 'Çanakkale',
        year: 2024,
        image: '/projects/ruzgar-turbini.jpg',
        description: '50 MW kapasiteli rüzgar santrali türbinlerinin yıllık bakım ve onarımı',
        fullDescription: '25 adet rüzgar türbininin periyodik bakımı, kanat temizliği ve arıza onarımları gerçekleştirilmiştir. IRATA sertifikalı ekibimiz ile 120 metrelik yüksekliklerde güvenli çalışma sağlanmıştır.',
        tags: ['Rüzgar Enerjisi', 'Bakım', 'İple Erişim'],
        services: ['ruzgar-enerjisi-santralleri-bakim']
    },
    {
        id: 3,
        title: 'Sapanca Gölü Kenar Yolu Kaya Bariyeri',
        category: 'Jeoteknik',
        location: 'Sakarya',
        year: 2023,
        image: '/projects/kaya-bariyeri.jpg',
        description: '5 km uzunluğunda kaya düşme bariyeri kurulumu ve yamaç stabilizasyonu',
        fullDescription: 'Sapanca Gölü kenar yolunda kaya düşme riskine karşı toplam 5 km uzunluğunda EN 1317 standartlarına uygun kaya bariyeri kurulumu yapılmıştır. Proje kapsamında yamaç temizliği ve stabilizasyon işlemleri de gerçekleştirilmiştir.',
        tags: ['Kaya Bariyeri', 'Yamaç', 'EN 1317'],
        services: ['kaya-bariyeri', 'yamac-yuzeyi-temizleme']
    },
    {
        id: 4,
        title: 'İş Merkezi Cam Cephe Temizliği',
        category: 'Endüstriyel Dağcılık',
        location: 'İstanbul',
        year: 2024,
        image: '/projects/cephe-temizlik.jpg',
        description: '45 katlı modern iş merkezinin yıllık cephe temizlik ve bakım hizmeti',
        fullDescription: 'Levent\'te bulunan 45 katlı plaza binasının cam cephesinin profesyonel temizliği iple erişim teknikleri kullanılarak gerçekleştirilmiştir. Özel temizlik kimyasalları ve saf su sistemleriyle lekesiz sonuç elde edilmiştir.',
        tags: ['Cephe Temizliği', 'İş Merkezi', 'Yüksek Bina'],
        services: ['ic-ve-dis-cephe-temizlik-hizmetleri']
    },
    {
        id: 5,
        title: 'Tuzla Tersanesi İskele Bakımı',
        category: 'Offshore',
        location: 'İstanbul',
        year: 2023,
        image: '/projects/tersane.jpg',
        description: 'Tersane iskelelerinde kaynak, boya ve anti-korozif kaplama uygulamaları',
        fullDescription: 'Tuzla Tersanesi\'nde 3 adet büyük iskelenin under-deck ve deniz seviyesi altı bölgelerinde kaynak takviyesi, çelik konstrüksiyon onarımları ve koruyucu kaplama uygulamaları yapılmıştır.',
        tags: ['Tersane', 'Offshore', 'Kaynak'],
        services: ['tersane-ve-offshore-hizmetleri']
    },
    {
        id: 6,
        title: 'Alışveriş Merkezi Güvenlik Ağı',
        category: 'Endüstriyel Dağcılık',
        location: 'Ankara',
        year: 2024,
        image: '/projects/guvenlik-agi.jpg',
        description: 'AVM inşaatında yüksek alan düşme koruması için güvenlik ağı montajı',
        fullDescription: 'Yeni inşa edilen alışveriş merkezinin atrium bölümünde EN 1263 standartlarına uygun güvenlik ağı sistemleri kurulmuştur. Toplam 2000 m² alan kapsayan uygulama ile işçi güvenliği sağlanmıştır.',
        tags: ['Güvenlik Ağı', 'AVM', 'EN 1263'],
        services: ['guvenlik-agi-kurulumu']
    },
    {
        id: 7,
        title: 'Bolu Dağı Tüneli Şev Stabilizasyonu',
        category: 'Jeoteknik',
        location: 'Bolu',
        year: 2023,
        image: '/projects/sev-ortuleme.jpg',
        description: 'Tünel giriş bölgesi yamaç örtüleme ve moloz bariyer uygulaması',
        fullDescription: 'Bolu Dağı Tüneli giriş bölümünde heyelan riski taşıyan yamaçlara çelik tel örtü ve moloz bariyer sistemleri kurulmuştur. 15.000 m² alan üzerine yayılan proje ile yol güvenliği artırılmıştır.',
        tags: ['Şev Örtüleme', 'Moloz Bariyer', 'Tünel'],
        services: ['sev-ortuleme', 'moloz-bariyer']
    },
    {
        id: 8,
        title: 'Petrokim Rafinerisi Hassas Alan Çalışması',
        category: 'ATEX',
        location: 'İzmir',
        year: 2024,
        image: '/projects/atex.jpg',
        description: 'ATEX bölgesinde tank temizliği ve boru hattı bakım işleri',
        fullDescription: 'Petrokimya tesisinde ATEX zonlu alanlarda özel ekipman ve prosedürlerle tank içi temizliği, gaz dedektörü montajları ve boru hattı periyodik kontrolleri gerçekleştirilmiştir.',
        tags: ['ATEX', 'Petrokimya', 'Hassas Alan'],
        services: ['hassas-endustriyel-alan-korumasi']
    },
    {
        id: 9,
        title: 'Park Ağaçlandırma ve Budama',
        category: 'Arborist',
        location: 'İstanbul',
        year: 2024,
        image: '/projects/arborist.jpg',
        description: 'Belediye parkında yaşlı ağaçların ISA standartlarına uygun bakımı',
        fullDescription: 'Maslak Parkı\'nda bulunan 150+ yaşlı çınar ve meşe ağaçlarının ISA sertifikalı arborist ekibimizle profesyonel budama, hastalık tedavisi ve bakım işlemleri yapılmıştır.',
        tags: ['Arborist', 'Ağaç Bakımı', 'ISA'],
        services: ['ormanda-iple-erisim-hizmetleri']
    },
    {
        id: 10,
        title: 'Konser Sahne Rigging Kurulumu',
        category: 'Sahne',
        location: 'İzmir',
        year: 2023,
        image: '/projects/sahne-rigging.jpg',
        description: 'Açık hava konser sahnesinde ses ve ışık sistemlerinin asılı montajı',
        fullDescription: 'Geniş katılımlı açık hava konserinde 15 ton toplam ağırlıktaki ses, ışık ve video ekipmanlarının güvenli rigging kurulumu ve stand-by teknik destek hizmeti verilmiştir.',
        tags: ['Rigging', 'Konser', 'Sahne'],
        services: ['sahne-isleri-rigging', 'stand-by-rescue-hizmeti']
    },
];

export const PROJECT_CATEGORIES = [
    'Tümü',
    'Endüstriyel Dağcılık',
    'Jeoteknik',
    'Enerji',
    'Altyapı',
    'Offshore',
    'ATEX',
    'Arborist',
    'Sahne',
];
