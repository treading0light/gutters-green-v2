import type { ServiceAreas } from '~/types/service-areas'

export const gutterCleaningAreas: ServiceAreas = {
     counties: [
    {
      slug: 'king',
      name: 'King County',
      heroTitle: 'Gutter Cleaning in King County',
      heroText: 'Thorough clog inspections, moss removal, and seasonal cleanings across King County.',
      cities: [
        { slug: 'algona', name: 'Algona', heroTitle: 'Gutter Cleaning in Algona', heroText: 'Quick, efficient cleanings for compact neighborhoods and easy scheduling.' },
        { slug: 'auburn', name: 'Auburn', heroTitle: 'Auburn Gutter Cleaning', heroText: 'From Lea Hill to downtown, we keep gutters clear and flowing year-round.' },
        { slug: 'beaux-arts-village', name: 'Beaux Arts Village', heroTitle: 'Beaux Arts Gutter Cleaning', heroText: 'Delicate, careful service tailored to unique homes near the lake.' },
        { slug: 'bellevue', name: 'Bellevue', heroTitle: 'Bellevue Gutter Cleaning', heroText: 'High-rise and suburban homes alike benefit from spotless, clog-free gutters.' },
        { slug: 'black-diamond', name: 'Black Diamond', heroTitle: 'Gutter Cleaning in Black Diamond', heroText: 'Tree-heavy lots get expert clearing and moss control for reliable flow.' },
        { slug: 'bothell', name: 'Bothell', heroTitle: 'Bothell Gutter Cleaning', heroText: 'Seasonal cleanings that tackle fir needles and leafy blockages.' },
        { slug: 'burien', name: 'Burien', heroTitle: 'Burien Gutter Cleaning', heroText: 'Neighborhood-focused service with thorough roofline debris removal.' },
        { slug: 'carnation', name: 'Carnation', heroTitle: 'Carnation Gutter Cleaning', heroText: 'Rural homes kept safe from overflow with full system flushing.' },
        { slug: 'clyde-hill', name: 'Clyde Hill', heroTitle: 'Clyde Hill Gutter Cleaning', heroText: 'Discreet, professional care for upscale properties and sensitive exteriors.' },
        { slug: 'covington', name: 'Covington', heroTitle: 'Covington Gutter Cleaning', heroText: 'Affordable seasonal cleanings that prevent costly water damage.' },
        { slug: 'des-moines', name: 'Des Moines', heroTitle: 'Des Moines Gutter Cleaning', heroText: 'Salt-air aware cleanings with full downspout checks.' },
        { slug: 'duvall', name: 'Duvall', heroTitle: 'Duvall Gutter Cleaning', heroText: 'Trusted local service clearing heavy debris from wooded lots.' },
        { slug: 'enumclaw', name: 'Enumclaw', heroTitle: 'Enumclaw Gutter Cleaning', heroText: 'Farm and residential cleanings that handle big roof spans.' },
        {
          slug: 'federal-way',
          name: 'Federal Way',
          heroTitle: 'Federal Way Gutter Cleaning Experts',
          heroText: 'From Twin Lakes to Dash Point—precision cleaning, moss treatment, and extra care to leave your property spotless.'
        },
        { slug: 'hunts-point', name: 'Hunts Point', heroTitle: 'Hunts Point Gutter Cleaning', heroText: 'Detail-focused cleanings for waterfront and luxury homes.' },
        { slug: 'issaquah', name: 'Issaquah', heroTitle: 'Issaquah Gutter Cleaning', heroText: 'Rain-heavy hills get dependable debris clearing and downspout flushing.' },
        { slug: 'kenmore', name: 'Kenmore', heroTitle: 'Kenmore Gutter Cleaning', heroText: 'Annual cleaning packages designed for needle-filled neighborhoods.' },
        { slug: 'kent', name: 'Kent', heroTitle: 'Kent Gutter Cleaning', heroText: 'Split-levels, ramblers, and townhomes all kept clog-free.' },
        { slug: 'kirkland', name: 'Kirkland', heroTitle: 'Kirkland Gutter Cleaning', heroText: 'Leafy waterfront and hillside properties get spotless cleanings.' },
        { slug: 'lake-forest-park', name: 'Lake Forest Park', heroTitle: 'Lake Forest Park Gutter Cleaning', heroText: 'Needle-heavy canopies cleared to protect foundations and siding.' },
        { slug: 'maple-valley', name: 'Maple Valley', heroTitle: 'Maple Valley Gutter Cleaning', heroText: 'Cleanings designed for fast-growing neighborhoods with tall roofs.' },
        { slug: 'medina', name: 'Medina', heroTitle: 'Medina Gutter Cleaning', heroText: 'Meticulous service to preserve high-end exteriors and landscaping.' },
        { slug: 'mercer-island', name: 'Mercer Island', heroTitle: 'Mercer Island Gutter Cleaning', heroText: 'Coastal winds and storms addressed with thorough seasonal cleanings.' },
        { slug: 'milton', name: 'Milton', heroTitle: 'Milton Gutter Cleaning', heroText: 'Cross-county experience keeping gutters tidy and trouble-free.' },
        { slug: 'newcastle', name: 'Newcastle', heroTitle: 'Newcastle Gutter Cleaning', heroText: 'Slope-smart drainage kept clear with reliable cleanings.' },
        { slug: 'normandy-park', name: 'Normandy Park', heroTitle: 'Normandy Park Gutter Cleaning', heroText: 'Coastal conditions cleaned with precision and care.' },
        { slug: 'north-bend', name: 'North Bend', heroTitle: 'North Bend Gutter Cleaning', heroText: 'Heavy-rain solutions with complete gutter and downspout flushing.' },
        { slug: 'pacific', name: 'Pacific', heroTitle: 'Pacific Gutter Cleaning', heroText: 'Budget-friendly cleanings that keep flat-lot homes safe and dry.' },
        { slug: 'redmond', name: 'Redmond', heroTitle: 'Redmond Gutter Cleaning', heroText: 'Suburban tech-town homes get fast, reliable cleaning service.' },
        { slug: 'renton', name: 'Renton', heroTitle: 'Renton Gutter Cleaning', heroText: 'Reliable roofline clearing for every corner of the city.' },
        { slug: 'sammamish', name: 'Sammamish', heroTitle: 'Sammamish Gutter Cleaning', heroText: 'Lake breezes and tall trees handled with seasonal cleanings.' },
        { slug: 'seatac', name: 'SeaTac', heroTitle: 'SeaTac Gutter Cleaning', heroText: 'High-traffic, high-wind homes protected with secure cleanings.' },
        { slug: 'seattle', name: 'Seattle', heroTitle: 'Seattle Gutter Cleaning', heroText: 'From Ballard to Beacon Hill—citywide expert cleaning.' },
        { slug: 'shoreline', name: 'Shoreline', heroTitle: 'Shoreline Gutter Cleaning', heroText: 'Seasonal cleanings to prevent overflow in tree-lined neighborhoods.' },
        { slug: 'skykomish', name: 'Skykomish', heroTitle: 'Skykomish Gutter Cleaning', heroText: 'Mountain-weather ready cleanings with rugged debris clearing.' },
        { slug: 'snoqualmie', name: 'Snoqualmie', heroTitle: 'Snoqualmie Gutter Cleaning', heroText: 'Neighborhood cleanings designed for heavy rain and steep roofs.' },
        { slug: 'tukwila', name: 'Tukwila', heroTitle: 'Tukwila Gutter Cleaning', heroText: 'Efficient service for busy neighborhoods and high rooflines.' },
        { slug: 'woodinville', name: 'Woodinville', heroTitle: 'Woodinville Gutter Cleaning', heroText: 'Wine-country rooftops cleared of pine needles and leaves.' },
        { slug: 'yarrow-point', name: 'Yarrow Point', heroTitle: 'Yarrow Point Gutter Cleaning', heroText: 'Cleanings with attention to detail for lakeside homes.' }
      ]
    },
    {
      slug: 'pierce',
      name: 'Pierce County',
      heroTitle: 'Gutter Cleaning in Pierce County',
      heroText: 'Professional gutter and downspout clearing across the South Sound.',
      cities: [
        { slug: 'auburn', name: 'Auburn', heroTitle: 'Auburn (Pierce) Gutter Cleaning', heroText: 'Pierce-side neighborhoods kept safe with seasonal cleanings.' },
        { slug: 'bonney-lake', name: 'Bonney Lake', heroTitle: 'Bonney Lake Gutter Cleaning', heroText: 'Plateau homes cleaned thoroughly for storm readiness.' },
        { slug: 'buckley', name: 'Buckley', heroTitle: 'Buckley Gutter Cleaning', heroText: 'Rural homes with large roof spans kept free of moss and clogs.' },
        { slug: 'carbonado', name: 'Carbonado', heroTitle: 'Carbonado Gutter Cleaning', heroText: 'Historic properties maintained with careful cleaning.' },
        { slug: 'dupont', name: 'DuPont', heroTitle: 'DuPont Gutter Cleaning', heroText: 'Planned community rooftops cleared with uniform, careful service.' },
        { slug: 'eatonville', name: 'Eatonville', heroTitle: 'Eatonville Gutter Cleaning', heroText: 'Mountain-edge homes cleared of moss and storm debris.' },
        { slug: 'edgewood', name: 'Edgewood', heroTitle: 'Edgewood Gutter Cleaning', heroText: 'Quiet neighborhoods get dependable cleaning service.' },
        { slug: 'fife', name: 'Fife', heroTitle: 'Fife Gutter Cleaning', heroText: 'Flat-lot homes with leafy surroundings get full cleanings.' },
        { slug: 'fircrest', name: 'Fircrest', heroTitle: 'Fircrest Gutter Cleaning', heroText: 'Historic charm preserved with careful debris removal.' },
        { slug: 'gig-harbor', name: 'Gig Harbor', heroTitle: 'Gig Harbor Gutter Cleaning', heroText: 'Coastal winds tackled with precise, thorough cleanings.' },
        { slug: 'lakewood', name: 'Lakewood', heroTitle: 'Lakewood Gutter Cleaning', heroText: 'Lakeside weather addressed with seasonal debris clearing.' },
        { slug: 'milton', name: 'Milton', heroTitle: 'Milton Gutter Cleaning', heroText: 'Cross-county cleaning service that keeps homes dry.' },
        { slug: 'orting', name: 'Orting', heroTitle: 'Orting Gutter Cleaning', heroText: 'Valley homes cleared before seasonal flooding and rain.' },
        { slug: 'pacific', name: 'Pacific', heroTitle: 'Pacific (Pierce) Gutter Cleaning', heroText: 'Reliable, quick cleanings for flat-lot neighborhoods.' },
        { slug: 'puyallup', name: 'Puyallup', heroTitle: 'Puyallup Gutter Cleaning', heroText: 'Festival city rooftops kept clog-free and ready for rain.' },
        { slug: 'roy', name: 'Roy', heroTitle: 'Roy Gutter Cleaning', heroText: 'Rural homes cleaned with rugged tools for long-lasting flow.' },
        { slug: 'ruston', name: 'Ruston', heroTitle: 'Ruston Gutter Cleaning', heroText: 'Waterfront homes cleared with extra care near the bay.' },
        { slug: 'south-prairie', name: 'South Prairie', heroTitle: 'South Prairie Gutter Cleaning', heroText: 'Wooded lots maintained with dependable cleanings.' },
        { slug: 'steilacoom', name: 'Steilacoom', heroTitle: 'Steilacoom Gutter Cleaning', heroText: 'Historic homes kept tidy with detailed cleaning service.' },
        { slug: 'sumner', name: 'Sumner', heroTitle: 'Sumner Gutter Cleaning', heroText: 'Industrial and residential rooftops alike get spotless cleanings.' },
        { slug: 'tacoma', name: 'Tacoma', heroTitle: 'Tacoma Gutter Cleaning', heroText: 'From Proctor to South End, gutters cleared across the city.' },
        { slug: 'university-place', name: 'University Place', heroTitle: 'University Place Gutter Cleaning', heroText: 'Neighborhood cleanings with leaf-guard checks included.' },
        { slug: 'wilkeson', name: 'Wilkeson', heroTitle: 'Wilkeson Gutter Cleaning', heroText: 'Small-town rooftops maintained with dependable cleaning service.' }
      ]
    }
  ]
}