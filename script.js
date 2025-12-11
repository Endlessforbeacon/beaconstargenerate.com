document.addEventListener('DOMContentLoaded', () => {
    // 1. Data Konten (Termasuk Properti Type, Description, dan Struktur Seasons/Episodes)
    const allContentData = [
        // Type: FILM
        { 
            id: 'film1', 
            title: 'Perpisahan Termanis', 
            type: 'film', 
            poster: 'Image/Poster Film & Serial/Poster Film Perpisahan Termanis.png', 
            videoUrl: 'videos/petualangan.mp4',
            description: 'Di tengah hutan belantara, sekelompok sahabat harus bertahan hidup dari makhluk tak kasat mata setelah matahari terbenam. Sebuah film thriller penuh ketegangan.' 
        },
        
        // Type: SERIAL (Struktur data kompleks Season dan Episode)
        { 
            id: 'serial1', 
            title: 'Petualangan Koin Ajaib', 
            type: 'serial', 
            poster: 'Image/Poster Film & Serial/Poster Petualangan Koin Ajaib Baru.png', 
            description: 'Serial ini berfokus pada petualangan seorang anak laki-laki bernama Kiko yang tinggal di sebuah desa yang damai dan sederhana, Desa Harapan. Desa ini diberkati dengan adanya Pohon Perak yang menjulang tinggi di pusatnya. Namun, kemakmuran desa terancam oleh kehadiran sosok jahat dan serakah bernama Pak Garang, yang tinggal di sebuah mansion megah di atas bukit. Cerita dimulai ketika Kiko menemukan sebuah koin ajaib yang memiliki kekuatan untuk mengabulkan permintaan. Di episode-episode awal, Kiko menggunakan koin ini untuk melakukan hal-hal kecil, seperti membantu ibunya yang kedinginan, menolong seorang kakek penjual roti, dan menyelamatkan seekor anak tupai. Tindakan kebaikan ini membuat Kiko menyadari bahwa koin ajaib adalah alat untuk menolong orang lain, bukan untuk keuntungan pribadi. Petualangan Kiko semakin seru ketika ia bertemu dan berteman dengan dua anak lainnya, Lina dan Jojo. Bersama-sama, mereka membentuk tim yang solid. Namun, kekuatan koin ajaib saja tidak cukup untuk menghadapi masalah yang semakin besar dan kompleks, terutama ketika Desa Harapan dilanda kesulitan akibat ulah Pak Garang. Serial ini mencapai puncaknya ketika Kiko, Lina, dan Jojo harus mengandalkan persahabatan, kerja keras, dan strategi mereka sendiri, bukan hanya keajaiban koin, untuk mengatasi ancaman terbesar Pak Garang. Pada akhirnya, mereka berhasil membuktikan bahwa kekuatan sejati bukan berasal dari benda ajaib, melainkan dari semangat kebersamaan dan ketabahan. Episode final mengisahkan kemenangan mereka, di mana Desa Harapan kembali makmur dan Pohon Perak bersinar lebih terang dari sebelumnya, sementara mansion Pak Garang yang sudah tak terurus menjadi simbol berakhirnya ancaman.',
            seasons: [
                {
                    seasonNumber: 1,
                    episodes: [
                        { episodeNumber: 1, title: "Koin dari Pohon Tua", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 1.mp4' },
                        { episodeNumber: 2, title: "Kehangatan yang Kembali", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 2.mp4' },
                        { episodeNumber: 3, title: "Misteri Tunas Embun Pagi dan Jejak Monyet Nakal", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 3.mp4' },
                        { episodeNumber: 4, title: "Air Mata Awan dan Misteri Gunung Langit", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 4.mp4' },
                        { episodeNumber: 5, title: "Misteri Hilangnya Suara Burung dan Lagu Harapan", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 5.mp4' },
                        { episodeNumber: 6.7, title: "Danau Cermin dan Rahasia di Bawah Air, Tunas Embun Pagi dan Petunjuk Jalan Pulang", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 6-7.mp4' },
                        { episodeNumber: 8, title: "Cincin Angin dan Ujian Kepercayaan", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 8.mp4' },
                        { episodeNumber: 9.10, title: "Hutan Gemerlap dan Jantung Kristal, Misteri Gunung Berapi dan Ramuan Keberanian", videoUrl: 'Video/Petualangan Koin Ajaib/Petualangan Koin Ajaib Episode 9-10.mp4' },
                        { episodeNumber: 11, title: "Bunga Pudar dan Rasa yang Bersemi", videoUrl: 'Image/Cuplikan layar 2025-12-02 170811.png' },
                    ]
                },
                {
                    seasonNumber: 2,
                    episodes: [
                        { episodeNumber: 1, title: "Kebangkitan", videoUrl: 'videos/misteri_s2e1.mp4' },
                        { episodeNumber: 2, title: "Akhir Cerita", videoUrl: 'videos/misteri_s2e2.mp4' }
                    ]
                }
            ]
        },
        { 
            id: 'serial2', 
            title: 'Rantai Persahabatan', 
            type: 'serial', 
            poster: 'Image/Poster Film & Serial/Poster Rantai Persahabatan.png', 
            description: 'Serial "Rantai Persahabatan" adalah sebuah kisah inspiratif tentang ikatan persahabatan yang diuji oleh tantangan hidup. Berfokus pada kehidupan enam siswa SMA, serial ini membuktikan bahwa dengan kerja sama, kejujuran, dan kepercayaan, setiap masalah—sekecil apa pun itu—dapat diatasi. Serial ini dimulai dengan memperkenalkan lima sahabat karib: Bagas, Riko, Rani, Nisa, dan Luna. Mereka adalah siswa yang ceria, penuh semangat, dan berambisi untuk membuat proyek mural guna mempercantik sekolah mereka. Di tengah kesibukan mereka, muncul seorang siswa pendiam dan tertutup bernama Doni. Doni sering terlihat gelisah dan menyendiri. Teman-teman Doni menyadari ada sesuatu yang tidak beres, hingga mereka akhirnya menemukan rahasia kelam Doni: ia terperangkap dalam jerat utang yang diwarisi dari ayahnya, dan sekarang ia dikejar-kejar oleh sekelompok preman. Tergerak oleh rasa simpati, kelima sahabat ini memutuskan untuk menjadikan utang Doni sebagai misi bersama. Mereka menyatukan seluruh kekuatan dan ide untuk membantu Doni. Para sahabat mulai menjalankan proyek sosial mereka dengan mengadakan bazar kecil-kecilan di sekolah. Namun, masalah yang mereka hadapi lebih besar dari yang mereka bayangkan. Tekanan dari para preman semakin intens, mengancam keselamatan Doni dan juga teman-temannya. Selain itu, muncul konflik internal di antara mereka. Luna terlihat menyimpan rahasia, seringkali menghilang dan bertemu dengan sosok misterius yang ia sebut "Om". Rahasia ini menciptakan ketegangan, terutama saat terungkap bahwa ia juga berhubungan dengan utang Doni. Di satu sisi, persahabatan mereka diuji, tetapi di sisi lain, mereka belajar untuk saling memaafkan, berkomunikasi, dan mempercayai satu sama lain. Setiap episode menyoroti perjuangan mereka dalam mengumpulkan dana, menghadapi preman, dan menjaga rahasia Luna. Cerita memasuki fase yang lebih intens. Mereka harus menghadapi rintangan yang lebih besar, seperti sabotase dari pihak-pihak yang tidak suka dengan proyek mereka. Hubungan Luna dengan "Om" akhirnya terungkap dan menjadi pemicu konflik besar. Identitas "Om" ternyata adalah paman Doni sendiri, yang justru berusaha membantu Doni membayar utangnya tanpa sepengetahuan sang keponakan, tetapi ia juga terjerat masalah. Di tengah badai ini, mereka menyelenggarakan sebuah acara besar, seperti festival sekolah atau konser amal, sebagai upaya terakhir untuk mengumpulkan sisa uang yang dibutuhkan. Semua masalah, baik yang berasal dari luar maupun dari dalam kelompok mereka, mencapai puncaknya. Pada puncaknya, para sahabat berhasil mengumpulkan jumlah uang yang dibutuhkan. Mereka berhasil melunasi utang Doni, mengakhiri teror dari para preman. Pengungkapan penuh tentang misteri paman Doni dan bantuan Luna akhirnya terkuak, memulihkan kepercayaan di antara mereka. Namun, serial ini tidak hanya berakhir dengan penyelesaian masalah finansial. Di episode-episode terakhir, cerita berfokus pada dampak jangka panjang dari perjalanan ini. Doni yang awalnya tertutup kini menjadi pribadi yang lebih terbuka. Luna belajar untuk lebih jujur. Sementara yang lainnya, mereka menyadari bahwa pengalaman ini telah membentuk mereka menjadi individu yang lebih kuat dan berani. Akhir cerita memperlihatkan mereka lulus dari sekolah, siap menghadapi tantangan hidup berikutnya, dengan keyakinan bahwa "Rantai Persahabatan" yang telah mereka bangun tidak akan pernah putus.',
            seasons: [
                {
                    seasonNumber: 1,
                    episodes: [
                        { episodeNumber: 1, title: "Simpul yang Terurai", videoUrl: 'Video/Rantai Persahabatan/Rantai Persahabatan Episode 1.mp4' },
                        { episodeNumber: 2, title: "Langkah Pertama, Beban Tersembunyi", videoUrl: 'Video/Rantai Persahabatan/Rantai Persahabatan Episode 2.mp4' }
                    ]
                }
            ]
        },
        { 
            id: 'serial3', 
            title: 'Simpang Tiga Pelangi', 
            type: 'serial', 
            poster: 'Image/Poster Film & Serial/Poster Simpang Tiga Pelangi Baru.png', 
            description: 'Serial "Simpang Tiga Pelangi" adalah drama remaja-dewasa muda yang mengharukan, mengeksplorasi kekuatan, kerapuhan, dan evolusi sebuah janji persahabatan yang dibuat di masa paling polos, kemudian diuji oleh realitas kehidupan, jarak geografis, dan pahitnya proses menjadi dewasa. Cerita ini berpusat pada Jihan, Arya, Lina, dan Adit—empat sahabat karib yang tak terpisahkan sejak SMP. Mereka menamai kelompok mereka JALAN, sebuah akronim dari nama mereka yang sekaligus menjadi filosofi persahabatan mereka: "Jalan, kita nggak akan pernah berjalan sendiri! Selamanya!" Simbol ikatan abadi mereka adalah Pohon Jati di Simpang Tiga, sebuah tempat rahasia di mana tiga jalan berbeda bertemu, dan di sanalah mereka mengubur Kapsul Waktu yang berisi semua impian, harapan, dan janji "selamanya" mereka. Namun, di hari kelulusan SMP yang seharusnya penuh kebahagiaan dan awal yang baru, janji suci itu hancur berkeping-keping. Arya, si jenius yang menjadi tumpuan emosional dan intelektual kelompok, secara mendadak mengumumkan bahwa ia harus pindah ke luar pulau secara permanen mengikuti tugas ayahnya. Pengumuman ini bukan hanya sekadar perpisahan geografis, melainkan sebuah "pengkhianatan" di mata Jihan—pemimpin alami kelompok yang paling memegang teguh janji mereka. Setelah kepergian Arya, serial ini akan membedah bagaimana tiga anggota yang tersisa—Jihan, Lina, dan Adit—berjuang untuk menavigasi kehidupan SMA/SMK mereka di sekolah yang berbeda dan bagaimana mereka mengatasi kekosongan yang ditinggalkan Arya: Jihan bergumul dengan amarahnya yang terpendam dan rasa dikhianati. Ia berusaha keras menjaga Lina dan Adit tetap utuh, namun ia juga dipaksa untuk menghadapi ambisi pribadinya di sekolah elite yang menuntut fokus penuh. Lina, yang paling emosional dan bergantung, harus berjuang melawan anxiety dan ketergantungannya tanpa kehadiran Arya yang menenangkan. Ia dipaksa untuk menemukan kemandiriannya, seringkali dengan bantuan Adit. Adit, si humoris yang selalu mencoba mencairkan suasana, kini mengambil peran yang lebih serius sebagai penopang emosional bagi Lina dan Jihan. Ia mencoba menjaga "nyala api" persahabatan agar tidak padam, sambil belajar tanggung jawab di dunia SMK dan bengkel. Sementara itu, Arya di kota barunya harus menghadapi kesendirian dan rasa bersalah yang mendalam karena telah melanggar janji. Ia bergumul untuk membangun hidup baru tanpa teman-teman lamanya, sambil terus memegang janji untuk kembali. Seiring berjalannya waktu, group chat JALAN yang dulu ramai mulai sepi, komunikasi jarak jauh menjadi dingin, dan masing-masing karakter bertemu dengan orang-orang baru yang menguji loyalitas dan prioritas mereka. Serial ini akan mengeksplorasi bagaimana pengalaman hidup yang berbeda ini membentuk mereka, apakah jarak benar-benar hanya angka, atau justru memisahkan hati. Klimaks cerita akan berpusat pada pertanyaan: Akankah janji "selamanya" di bawah Pohon Jati itu terbukti abadi? Akankah mereka bersatu kembali sebagai empat individu dewasa yang berbeda namun saling terhubung, ataukah mereka harus menerima bahwa "Simpang Tiga Pelangi" hanyalah kenangan terindah dari masa lalu yang takkan pernah terulang? "Simpang Tiga Pelangi" adalah kisah tentang proses menyakitkan dari kedewasaan yang menuntut persahabatan untuk berubah bentuk, menerima kehilangan, dan menemukan makna sejati dari ikatan yang melampaui waktu dan tempat.',
            seasons: [
                {
                    seasonNumber: 1,
                    episodes: [
                        { episodeNumber: 1, title: "Simfoni yang Sumbing", videoUrl: 'Video/Simpang Tiga Pelangi/Simpang Tiga Pelangi Episode 1.mp4' },
                        { episodeNumber: 2, title: "Minggu Terakhir di Simpang Tiga", videoUrl: 'videos/kampus_s1e2.mp4' }
                    ]
                }
            ]
        },
    ];

    // Dapatkan elemen kontainer dan modal dari HTML
    const filmListContainer = document.getElementById('film-list-container');
    const serialListContainer = document.getElementById('serial-list-container');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const player = document.getElementById('player');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    // Elemen khusus Serial
    const seasonSelect = document.getElementById('season-select');
    const episodesListContainer = document.getElementById('episodes-list');

    // --- Pemisahan Data ---
    const films = allContentData.filter(content => content.type === 'film');
    const series = allContentData.filter(content => content.type === 'serial');


    // 2. Fungsi untuk menampilkan daftar konten
    function renderContentList(data, containerElement) {
        data.forEach(content => {
            const card = document.createElement('div');
            card.className = 'film-card'; 
            card.setAttribute('data-id', content.id);
            card.innerHTML = `
                <img src="${content.poster}" alt="Poster ${content.title}">
                <h3>${content.title}</h3>
            `;
            containerElement.appendChild(card);
        });
    }

    // 3. Fungsi untuk Memuat Daftar Episode berdasarkan Season yang Dipilih
    function loadEpisodes(season) {
        episodesListContainer.innerHTML = ''; // Kosongkan daftar episode lama

        season.episodes.forEach(episode => {
            const episodeItem = document.createElement('div');
            episodeItem.className = 'episode-item';
            episodeItem.textContent = `E${episode.episodeNumber}: ${episode.title}`;
            episodeItem.setAttribute('data-video-url', episode.videoUrl);

            // Menambahkan event listener untuk memutar episode saat diklik
            episodeItem.addEventListener('click', () => {
                // Menyembunyikan selector episode dan menampilkan video player
                document.getElementById('episode-selector').style.display = 'none';
                player.style.display = 'block';

                const streamURL = episodeItem.getAttribute('data-video-url');
                player.querySelector('source').src = streamURL;
                player.load();
                player.play(); // Video diputar setelah episode dipilih
            });

            episodesListContainer.appendChild(episodeItem);
        });
    }

    // 4. Menangani klik pada kartu konten (Logika inti)
    document.getElementById('konten-streaming').addEventListener('click', (event) => {
        const card = event.target.closest('.film-card');
        if (card) {
            const contentId = card.getAttribute('data-id');
            const selectedContent = allContentData.find(c => c.id === contentId);
            
            if (selectedContent) {
                // Simpan ID konten yang sedang aktif di modal
                modal.dataset.currentContentId = contentId; 

                // Mengisi data dasar ke Modal (Judul & Keterangan)
                modalTitle.textContent = selectedContent.title;
                modalDescription.textContent = selectedContent.description; 
                
                
                if (selectedContent.type === 'film') {
                    // Jika Film: Langsung tampilkan Video Player
                    document.getElementById('episode-selector').style.display = 'none'; 
                    player.style.display = 'block'; 
                    const streamURL = `${selectedContent.videoUrl}`; 
                    player.querySelector('source').src = streamURL;
                    player.load(); 

                } else if (selectedContent.type === 'serial') {
                    // Jika Serial: Tampilkan Selector Episode/Season dan Sembunyikan Player
                    document.getElementById('episode-selector').style.display = 'block';
                    player.style.display = 'none'; 
                    
                    // Reset dan Isi Pilihan Season di dropdown
                    seasonSelect.innerHTML = '';
                    selectedContent.seasons.forEach(season => {
                        const option = document.createElement('option');
                        option.value = season.seasonNumber;
                        option.textContent = `Season ${season.seasonNumber}`;
                        seasonSelect.appendChild(option);
                    });
                    
                    // Muat daftar episode untuk Season pertama secara default
                    loadEpisodes(selectedContent.seasons[0]);
                }

                // Menampilkan Modal
                modal.style.display = 'block';
            }
        }
    });

    // 5. Menangani perubahan Season di dropdown (hanya untuk serial)
    seasonSelect.addEventListener('change', (event) => {
        const selectedSeasonNum = parseInt(event.target.value);
        const currentSerial = allContentData.find(c => c.id === modal.dataset.currentContentId);
        
        if (currentSerial && currentSerial.type === 'serial') {
            const selectedSeason = currentSerial.seasons.find(s => s.seasonNumber === selectedSeasonNum);
            if (selectedSeason) {
                loadEpisodes(selectedSeason);
            }
        }
    });
    

    // 6. Fungsi menutup modal (Menghentikan video)
    closeBtn.onclick = () => {
        player.pause(); 
        modal.style.display = 'none';
    }

    // Menutup Modal jika mengklik di luar area konten
    window.onclick = (event) => {
        if (event.target == modal) {
            player.pause(); 
            modal.style.display = 'none';
        }
    }

    // Panggil fungsi untuk menampilkan konten saat halaman dimuat
    renderContentList(films, filmListContainer);
    renderContentList(series, serialListContainer);
});