const allImages = [ 
		{ src: 'GCGallery/ent1.jpg', desc: 'Elevator entrance near 49 East 44th Street near the MetLife Building. Brings you to the concourse, where you can access the LIRR, Metro North, and Subway.'},
		{ src: 'GCGallery/ent2.jpg', desc: 'Concourse with artwork, countdown clock, and signs pointing to two elevators. The one on the left goes to Metro North, the right to Street Level.'},
		{ src: 'GCGallery/ent3.jpg', desc: 'Elevator entrance near 280 Park Avenue near 48th Street and Madison Avenue. This brings you to the northernmost point of Grand Central LIRR.'},
		{ src: 'GCGallery/ent4.jpg', desc: 'The Elevator on the Concourse of Grand Central LIRR, at the 48th Street area. This brings you to the street level. A future staircase is planned to be open here.'},
		{ src: 'GCGallery/ent5.jpg', desc: 'The Main Entrance to Grand Central LIRR, at 383 Madison Avenue, near 47th Street. This brings you to the LIRR Concourse and ticket area.'},
		{ src: 'GCGallery/ent6.jpg', desc: 'The 47th Street area on the Concourse, with two staircases to street level (the left one connects to Metro North on weekdays), ticket machines, and elevator.'},
		{ src: 'GCGallery/ent7.jpg', desc: 'A fenced off, due to repairs, pathway for the elevator at the 47th Street area to the street level. This is located on the side of the ticket area at 47th Street.'},
		{ src: 'GCGallery/ent8.jpg', desc: 'The entrance to the LIRR from the Dining Hall at Grand Central Terminals Lower Level. This leads to the southernmost part of Grand Central LIRR at 43rd Street.'},
		{ src: 'GCGallery/ent9.jpg', desc: 'The Blue Door Exit leading to the stairs and escalator to the Dining Concourse, Lower Level Metro North tracks, ramps to the Main Concourse, and subway.'},
		{ src: 'GCGallery/ent11.jpg', desc: 'The One Vanderbilt side of Grand Central LIRR. This is on level -4, which leads passengers to/from the LIRR. A staircase, elevator, and escalator are present.'},
		{ src: 'GCGallery/ent12.jpg', desc: 'The One Vanderbilt side of Grand Central. This is on level -2, showing the elevator and where it serves within the terminal. Level -2 primarily serves the Subway.'},
		{ src: 'GCGallery/ent13.jpg', desc: 'The One Vanderbilt side of Grand Central. This showcases level -2, showing the Subway entrance from the elevator area in the distance, along with many stairs and escalators.'},
		{ src: 'GCGallery/ent14.jpg', desc: 'The One Vanderbilt side of Grand Central on level -2. This shows the turnstyle area to pay and enter the Subway. The doors in the back lead to the 42nd Street Shuttle to Times Square.'},
		{ src: 'GCGallery/ent16.jpg', desc: 'The One Vanderbilt side of Grand Central on level -1. The brown doors lead straight into the Main Concourse and Metro North. Summit One Vanderbilt is also located on this level! '},
		{ src: 'GCGallery/ent17.jpg', desc: 'Entrance at 43rd Street and Vanderbilt Avenue. To access Grand Central LIRR, go down to floor -4 via the stairs or elevator. You can also connect to the Summit, Subway, and Metro North.'},
		{ src: 'GCGallery/conc1.jpg', desc: 'Artwork called A Message of Love by Yayoi Kusama, located on the concourse level of Grand Central LIRR between 46th and 47th Streets.'},
		{ src: 'GCGallery/conc2.jpg', desc: 'A View of a empty, yet sturdy and shiny Concourse at Grand Central LIRR, near 47th Street. The LED Artwork is accompanied by sleek marble and lighting.' },
		{ src: 'GCGallery/conc3.jpg', desc: 'A View of the Concourse, Artwork, and Notable Electronic Map showing all stops of the entire LIRR Network.' },
		{ src: 'GCGallery/conc4.jpg', desc: 'A View of the passengers bustling to/from the LIRR, Metro North, and Subway, near the Concourse around 45th Street.' },
		{ src: 'GCGallery/conc5.jpg', desc: 'Signage depicting directions to the Elevators, Dining Hall, Metro North, and Subway.' },
		{ src: 'GCGallery/conc6.jpg', desc: 'The Blue Doors leading to the Dining Hall/Shops, Metro North, Main Concourse, and Subway.' },
		{ src: 'GCGallery/conc7.jpg', desc: 'Glass Doors leading to the closest Subway area, One Vanderbilt, Main Concourse, and Street.' },
		{ src: 'GCGallery/conc8.jpg', desc: 'Signage depicting directions towards the 48th Street area, escalators, and elevator to Street.' },
		{ src: 'GCGallery/conc9.jpg', desc: 'A View of the LIRR concourse lighted in red for Valentines Day! With hustling and bustling.' },
		{ src: 'GCGallery/conc10.jpg', desc: 'A View of the 46th Street area, escalators, artwork, and red lights on the concourse. ' },
		{ src: 'GCGallery/conc11.jpg', desc: 'A View of the LIRR concourse on a cold, Valentines evening in 2025.' },
		{ src: 'GCGallery/conc12.jpg', desc: 'A View of the 48th Street escalator bank down to the LIRR Mezzanine' },
		{ src: 'GCGallery/conc13.jpg', desc: 'A View of the 47th Street escalator bank down to the LIRR Mezzanine.' },
		{ src: 'GCGallery/conc14.jpg', desc: 'A View going down one of the huge escalators to the LIRR Mezzanine.' },
		{ src: 'GCGallery/conc15.jpg', desc: 'A View of the mezz-conc elevators located near 47th Street/Ticketing/Waiting Booth.' },
		{ src: 'GCGallery/conc16.jpg', desc: 'A View of the mezz-conc elevators, looking towards the concourse at 47th Street.' },
		{ src: 'GCGallery/mezz1.jpg', desc: 'A View of the Mezzanine and a staircase/escalator near 47th Street.' },
		{ src: 'GCGallery/mezz2.jpg', desc: 'A View of the Mezzanine and the escalators near the 45th Street area.' },
		{ src: 'GCGallery/mezz3.jpg', desc: 'A View of the Mezzanine and a staircase/escalator at the 47th Street area.' },
		{ src: 'GCGallery/mezz4.jpg', desc: 'A View of the Artwork, green beam, and signage at the 45th Street area.' },
		{ src: 'GCGallery/mezz5.jpg', desc: 'A View of the connection between both sets of platforms to the x03/04 tracks.' },
		{ src: 'GCGallery/mezz6.jpg', desc: 'A View of the shiny escalator bank to the concourse at the 45th Street area.' },
		{ src: 'GCGallery/mezz7.jpg', desc: 'A View of the path to the mezzanine elevators near 47th Street.' },
		{ src: 'GCGallery/mezz8.jpg', desc: 'A View of the little known mezzanine elevators that travel to/from the concourse.' },
		{ src: 'GCGallery/mezz9.jpg', desc: 'A View of a Valentines Glowing Red beam and path to the x03/04 area at 47th St.' },
		{ src: 'GCGallery/mezz10.jpg', desc: 'A View of a Valentines Glowing Red beam and crispy artwork, also at 47th St.' },
		{ src: 'GCGallery/mezz11.jpg', desc: 'A View of a Valentines Glowing Red beam and path to the x03/04 area at 45th St.' },
		{ src: 'GCGallery/mezz12.jpg', desc: 'A View of a Valentines Glowing Red beam and path to the escalators at 45th St.' },
		{ src: 'GCGallery/mezz13.jpg', desc: 'A View of the Mezzanine, Stairs, Escalators, and Artwork at 47th Street.' },
		{ src: 'GCGallery/mezz14.jpg', desc: 'A View of the Artwork called The Waters Way and track signs at 45th Street.' },
		{ src: 'GCGallery/mezz15.jpg', desc: 'A View of the Glowing Blue Beam, Artwork, Signage to tracks at 46th Street.' },
		{ src: 'GCGallery/mezz16.jpg', desc: 'A View of the escalator bank at the 48th Street area. The northernmost area of GCM LIRR.' },
		{ src: 'GCGallery/plat1.jpg', desc: 'A LIRR Train of M9s on Track 201 to Ronkonkoma.(Weekend Ronk. trains now only go to Penn.)' },
		{ src: 'GCGallery/plat2.jpg', desc: 'A LIRR Train of M9s resting at Track 302 that came from Far Rockaway.' },
		{ src: 'GCGallery/plat3.jpg', desc: 'A LIRR Train of M7s on Track 304 supposed to go to Long Island, but was delayed.' },
		{ src: 'GCGallery/plat4.jpg', desc: 'An empty track 301, with an empty platform, with an empty M9 on Track 302.' },
		{ src: 'GCGallery/plat5.jpg', desc: 'A View of 2 M7s occupying tracks 301 and 302 on a cold January 2025 weekend.' },
		{ src: 'GCGallery/plat6.jpg', desc: 'A Mezzanine view of an empty platform on Tracks 301 and 302 (from an elevator).' },
		{ src: 'GCGallery/plat7.jpg', desc: 'A View of an M7 and M9 resting on Track 301 and 302, gearing to begin service.' },
		{ src: 'GCGallery/plat8.jpg', desc: 'A View of 2 M7s and an escalator from tracks 203 and 204 at 45th Street area.' },
		{ src: 'GCGallery/plat9.jpg', desc: 'A View of one of the platforms with an elevator from the Track 301/302 area.' },
		{ src: 'GCGallery/plat10.jpg', desc: 'A View of an M7 and M9, with the freight elevator on Tracks 303 and 304.' },
		{ src: 'GCGallery/plat11.jpg', desc: 'A View of an M7 and M9 on tracks 303/304 with a peek of their 200-level counterparts.' },
		{ src: 'GCGallery/plat12.jpg', desc: 'A View of an M7 and M9 at the 303/304 area, during a severe delay crippling service.' },
		{ src: 'GCGallery/plat13.jpg', desc: 'A View of an M7 and M9 at the 303/304 area, during a severe delay crippling service.' },
		{ src: 'GCGallery/plat14.jpg', desc: 'A Mezzanine Level View of the 303/304 platform and trains, and all the succeeding areas.' },
		{ src: 'GCGallery/plat15.jpg', desc: 'A View of 2 M9s and an escalator from tracks 203 and 204 at 45th Street area.' },
		{ src: 'GCGallery/plat16.jpg', desc: 'A View of an M9 closed off and sitting idle on Track 204 admist a service halt.' },
		{ src: 'GCGallery/plat17.jpg', desc: 'A View of 2 M7s parked on tracks 201/202 at the start of a Friday PM Rush Hour.' },
		{ src: 'GCGallery/plat18.jpg', desc: 'A View of a Red instead Green beam at 45th Street on tracks 201/202 on Valentines Day.' }
];

const imagesPerPage = 12;
let currentPage = 1;
const totalPages = Math.ceil(allImages.length / imagesPerPage);

const galleryContainer = document.getElementById('imageGallery');
const pageNumberDisplay = document.getElementById('pageNumber');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const firstButton = document.getElementById('firstButton');
const lastButton = document.getElementById('lastButton');

function renderGallery() {
	galleryContainer.innerHTML = '';

	const start = (currentPage - 1) * imagesPerPage;
	const end = start + imagesPerPage;
	const imagesToDisplay = allImages.slice(start, end);

	imagesToDisplay.forEach((image, index) => {
		setTimeout(() => {
			// Create the image element
			const imgElement = document.createElement('img');
			imgElement.src = image.src;
			imgElement.alt = 'Gallery Image';
			imgElement.classList.add('gallery-image');
		
			imgElement.loading = "lazy";
			
			imgElement.classList.add('fade-in');

			// Create a description container and add description
			const descElement = document.createElement('p');
			descElement.textContent = image.desc;
			descElement.classList.add('image-description');

			// Create a container for both image and description
			const imgContainer = document.createElement('div');
			imgContainer.classList.add('image-container');
			imgContainer.appendChild(imgElement);
			imgContainer.appendChild(descElement);
				
			// Open modal on image click
			imgElement.addEventListener('click', () => openModal(image.src));
			
			// Append imgContainer (not imgElement directly)
			galleryContainer.appendChild(imgContainer);
		
		}, index * 100);
	});

	pageNumberDisplay.textContent = `Page ${currentPage}`;

	// Update pagination buttons
	firstButton.disabled = currentPage === 1;
	prevButton.disabled = currentPage === 1;
	nextButton.disabled = currentPage === totalPages;
	lastButton.disabled = currentPage === totalPages;
}

function openModal(imageUrl) {
	modal.style.display = 'flex';
	modalImage.src = imageUrl;
}

modalClose.addEventListener('click', () => {
	modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});

function navigatePage(direction) {
	if (direction === 'next' && currentPage < totalPages) {
		currentPage++;
	} 
	else if (direction === 'prev' && currentPage > 1) {
		currentPage--;
	}
	else if (direction === 'first') {
		currentPage = 1;
	}
	else if (direction === 'last') {
		currentPage = totalPages;
	}
	renderGallery();
}

renderGallery();
