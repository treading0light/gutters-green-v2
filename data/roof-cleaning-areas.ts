import type { ServiceAreas } from '~/types/service-areas'

export const roofCleaningAreas: ServiceAreas = {
    counties: [
    {
      slug: 'king',
      name: 'King County',
      heroTitle: 'Roof Cleaning in King County',
      heroText: 'Professional roof debris clearing with blower, plus moss removal and treatment across King County.',
      cities: [
        { slug: 'algona', name: 'Algona', heroTitle: 'Roof Cleaning in Algona', heroText: 'Air-blow debris clearing and moss treatment for compact neighborhoods.' },
        { slug: 'auburn', name: 'Auburn', heroTitle: 'Auburn Roof Cleaning', heroText: 'Brush and blower moss removal serving Lea Hill, West Hill, and beyond.' },
        { slug: 'beaux-arts-village', name: 'Beaux Arts Village', heroTitle: 'Roof Cleaning in Beaux Arts Village', heroText: 'Gentle debris removal and moss treatment for lakeside homes.' },
        { slug: 'bellevue', name: 'Bellevue', heroTitle: 'Bellevue Roof Cleaning', heroText: 'Trusted brush-and-blower moss removal to protect Eastside roofs.' },
        { slug: 'black-diamond', name: 'Black Diamond', heroTitle: 'Black Diamond Roof Cleaning', heroText: 'Rugged moss brushing and debris clearing for tree-covered homes.' },
        { slug: 'bothell', name: 'Bothell', heroTitle: 'Bothell Roof Cleaning', heroText: 'Seasonal debris removal and moss treatment for lasting protection.' },
        { slug: 'burien', name: 'Burien', heroTitle: 'Burien Roof Cleaning', heroText: 'Blower debris clearing and moss control to extend roof life.' },
        { slug: 'carnation', name: 'Carnation', heroTitle: 'Carnation Roof Cleaning', heroText: 'Reliable moss brushing and air-blow cleaning for rural rooftops.' },
        { slug: 'clyde-hill', name: 'Clyde Hill', heroTitle: 'Clyde Hill Roof Cleaning', heroText: 'Discreet moss removal and blower debris clearing for upscale properties.' },
        { slug: 'covington', name: 'Covington', heroTitle: 'Covington Roof Cleaning', heroText: 'Seasonal debris clearing and preventative moss treatment.' },
        { slug: 'des-moines', name: 'Des Moines', heroTitle: 'Des Moines Roof Cleaning', heroText: 'Coastal moisture addressed with blower debris clearing and moss care.' },
        { slug: 'duvall', name: 'Duvall', heroTitle: 'Duvall Roof Cleaning', heroText: 'Rooftops kept safe with brush moss removal and blower debris clearing.' },
        { slug: 'enumclaw', name: 'Enumclaw', heroTitle: 'Enumclaw Roof Cleaning', heroText: 'Farm and residential homes maintained with moss brushing and treatment.' },
        {
          slug: 'federal-way',
          name: 'Federal Way',
          heroTitle: 'Professional Roof Cleaning In Federal Way, WA.',
          heroText: `At <strong>The Gutters Green</strong>, we provide thorough, professional 
                <strong>roof cleaning services</strong> designed to protect your home and extend the life of your roof. 
                From <strong>moss removal</strong> and <strong>roof blowing</strong> to full <strong>gutter cleaning</strong> 
                and <strong>minor repairs</strong>, our team ensures your roofing system stays clear and functional year-round.
                 We take pride in delivering safe, effective results using the right tools and techniques to keep your roof looking 
                 its best and working as it should.`
        },
        { slug: 'hunts-point', name: 'Hunts Point', heroTitle: 'Roof Cleaning in Hunts Point', heroText: 'Detail-focused moss removal and air-blow cleaning for luxury roofs.' },
        { slug: 'issaquah', name: 'Issaquah', heroTitle: 'Issaquah Roof Cleaning', heroText: 'Hillside homes cleared of debris and moss with brush and blower.' },
        { slug: 'kenmore', name: 'Kenmore', heroTitle: 'Kenmore Roof Cleaning', heroText: 'Neighborhood rooftops kept moss-free with seasonal brush removal.' },
        { slug: 'kent', name: 'Kent', heroTitle: 'Kent Roof Cleaning', heroText: 'Thorough moss brushing and blower cleaning across the valley.' },
        { slug: 'kirkland', name: 'Kirkland', heroTitle: 'Kirkland Roof Cleaning', heroText: 'Waterfront homes protected with blower debris clearing and moss care.' },
        { slug: 'lake-forest-park', name: 'Lake Forest Park', heroTitle: 'Lake Forest Park Roof Cleaning', heroText: 'Evergreen-heavy roofs brushed clear of moss and blown clean of debris.' },
        { slug: 'maple-valley', name: 'Maple Valley', heroTitle: 'Maple Valley Roof Cleaning', heroText: 'Seasonal brush and blower services to stop moss before it spreads.' },
        { slug: 'medina', name: 'Medina', heroTitle: 'Medina Roof Cleaning', heroText: 'Careful moss treatment and debris clearing for high-value homes.' },
        { slug: 'mercer-island', name: 'Mercer Island', heroTitle: 'Mercer Island Roof Cleaning', heroText: 'Island roofs cleared of debris and brushed free of moss.' },
        { slug: 'milton', name: 'Milton', heroTitle: 'Milton Roof Cleaning', heroText: 'Reliable moss removal and blower debris clearing for local rooftops.' },
        { slug: 'newcastle', name: 'Newcastle', heroTitle: 'Newcastle Roof Cleaning', heroText: 'Steep slopes handled safely with brush and blower moss control.' },
        { slug: 'normandy-park', name: 'Normandy Park', heroTitle: 'Normandy Park Roof Cleaning', heroText: 'Coastal rooftops maintained with debris clearing and moss treatment.' },
        { slug: 'north-bend', name: 'North Bend', heroTitle: 'North Bend Roof Cleaning', heroText: 'Mountain homes brushed clean of moss and blown clear of pine needles.' },
        { slug: 'pacific', name: 'Pacific', heroTitle: 'Pacific Roof Cleaning', heroText: 'Affordable roof debris clearing and moss brushing services.' },
        { slug: 'redmond', name: 'Redmond', heroTitle: 'Redmond Roof Cleaning', heroText: 'High-tech town homes protected with blower debris removal and moss care.' },
        { slug: 'renton', name: 'Renton', heroTitle: 'Renton Roof Cleaning', heroText: 'Split-levels and ramblers kept moss-free with brush and blower service.' },
        { slug: 'sammamish', name: 'Sammamish', heroTitle: 'Sammamish Roof Cleaning', heroText: 'Lake-breeze neighborhoods benefit from debris clearing and moss control.' },
        { slug: 'seatac', name: 'SeaTac', heroTitle: 'SeaTac Roof Cleaning', heroText: 'High-wind rooftops kept clean with blower service and moss brushing.' },
        { slug: 'seattle', name: 'Seattle', heroTitle: 'Seattle Roof Cleaning', heroText: 'Citywide brush and blower moss removal—from Ballard to Beacon Hill.' },
        { slug: 'shoreline', name: 'Shoreline', heroTitle: 'Shoreline Roof Cleaning', heroText: 'Tree-lined streets maintained with blower debris clearing and moss treatment.' },
        { slug: 'skykomish', name: 'Skykomish', heroTitle: 'Skykomish Roof Cleaning', heroText: 'Mountain roofs protected with brush moss removal and air-blow clearing.' },
        { slug: 'snoqualmie', name: 'Snoqualmie', heroTitle: 'Snoqualmie Roof Cleaning', heroText: 'Steep, rainy roofs cleared of moss with brush and blower methods.' },
        { slug: 'tukwila', name: 'Tukwila', heroTitle: 'Tukwila Roof Cleaning', heroText: 'Busy neighborhoods kept safe with moss brushing and blower cleaning.' },
        { slug: 'woodinville', name: 'Woodinville', heroTitle: 'Woodinville Roof Cleaning', heroText: 'Wine-country rooftops brushed clear of moss and blown free of debris.' },
        { slug: 'yarrow-point', name: 'Yarrow Point', heroTitle: 'Yarrow Point Roof Cleaning', heroText: 'Lakeside homes kept pristine with moss brushing and blower clearing.' }
      ]
    },
    {
      slug: 'pierce',
      name: 'Pierce County',
      heroTitle: 'Roof Cleaning in Pierce County',
      heroText: 'Air-blow debris clearing and moss removal services for South Sound homes.',
      cities: [
        { slug: 'auburn', name: 'Auburn', heroTitle: 'Auburn (Pierce) Roof Cleaning', heroText: 'Pierce-side homes brushed and blown clean of moss and debris.' },
        { slug: 'bonney-lake', name: 'Bonney Lake', heroTitle: 'Bonney Lake Roof Cleaning', heroText: 'Plateau rooftops cleared of moss and roof debris with care.' },
        { slug: 'buckley', name: 'Buckley', heroTitle: 'Buckley Roof Cleaning', heroText: 'Rural rooftops brushed clean of moss and blown clear of debris.' },
        { slug: 'carbonado', name: 'Carbonado', heroTitle: 'Carbonado Roof Cleaning', heroText: 'Historic homes preserved with gentle brush moss removal.' },
        { slug: 'dupont', name: 'DuPont', heroTitle: 'DuPont Roof Cleaning', heroText: 'Planned community rooftops maintained with blower debris clearing.' },
        { slug: 'eatonville', name: 'Eatonville', heroTitle: 'Eatonville Roof Cleaning', heroText: 'Mountain-edge rooftops brushed clean of moss buildup.' },
        { slug: 'edgewood', name: 'Edgewood', heroTitle: 'Edgewood Roof Cleaning', heroText: 'Quiet neighborhoods kept moss-free with brush and blower cleaning.' },
        { slug: 'fife', name: 'Fife', heroTitle: 'Fife Roof Cleaning', heroText: 'Flat-lot roofs cleared of debris and treated for moss control.' },
        { slug: 'fircrest', name: 'Fircrest', heroTitle: 'Fircrest Roof Cleaning', heroText: 'Neighborhood roofs brushed and blown clean of moss and debris.' },
        { slug: 'gig-harbor', name: 'Gig Harbor', heroTitle: 'Gig Harbor Roof Cleaning', heroText: 'Waterfront rooftops protected with moss removal and blower cleaning.' },
        { slug: 'lakewood', name: 'Lakewood', heroTitle: 'Lakewood Roof Cleaning', heroText: 'Lakeside rooftops maintained with moss brushing and air-blow clearing.' },
        { slug: 'milton', name: 'Milton', heroTitle: 'Milton Roof Cleaning', heroText: 'Cross-county rooftops kept clean with blower debris clearing.' },
        { slug: 'orting', name: 'Orting', heroTitle: 'Orting Roof Cleaning', heroText: 'Valley homes brushed free of moss and cleared of roof debris.' },
        { slug: 'pacific', name: 'Pacific', heroTitle: 'Pacific (Pierce) Roof Cleaning', heroText: 'Affordable moss brushing and blower debris clearing for homes.' },
        { slug: 'puyallup', name: 'Puyallup', heroTitle: 'Puyallup Roof Cleaning', heroText: 'Festival city homes protected with brush moss removal and blower clearing.' },
        { slug: 'roy', name: 'Roy', heroTitle: 'Roy Roof Cleaning', heroText: 'Rural rooftops brushed and blown clear for long-lasting roof life.' },
        { slug: 'ruston', name: 'Ruston', heroTitle: 'Ruston Roof Cleaning', heroText: 'Waterfront rooftops cleared of debris and moss with care.' },
        { slug: 'south-prairie', name: 'South Prairie', heroTitle: 'South Prairie Roof Cleaning', heroText: 'Wooded rooftops brushed and treated to prevent moss return.' },
        { slug: 'steilacoom', name: 'Steilacoom', heroTitle: 'Steilacoom Roof Cleaning', heroText: 'Historic rooftops carefully cleared of moss and debris.' },
        { slug: 'sumner', name: 'Sumner', heroTitle: 'Sumner Roof Cleaning', heroText: 'Residential and industrial rooftops brushed and blown clean.' },
        { slug: 'tacoma', name: 'Tacoma', heroTitle: 'Tacoma Roof Cleaning', heroText: 'From North End to South Tacoma Way—expert moss brushing and blower clearing.' },
        { slug: 'university-place', name: 'University Place', heroTitle: 'University Place Roof Cleaning', heroText: 'Neighborhood homes brushed clear of moss and blown clean of debris.' },
        { slug: 'wilkeson', name: 'Wilkeson', heroTitle: 'Wilkeson Roof Cleaning', heroText: 'Small-town rooftops brushed and blown free of moss and debris.' }
      ]
    }
  ]
}