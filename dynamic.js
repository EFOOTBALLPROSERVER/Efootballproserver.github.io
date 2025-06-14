// Dados simulados para tornar o site mais dinâmico
const mockData = {
    tournaments: {
        x1: [
            {
                id: 'copa-efps-2024',
                name: 'Copa EFPS 2024',
                status: 'live',
                participants: 64,
                format: 'Eliminação Simples',
                prize: 'Troféu + Cargo Especial',
                progress: 75,
                stage: 'Semifinais',
                matches: [
                    { player1: 'ChampionX1', player2: 'ProGamer_02', score: '2-1', status: 'finished' },
                    { player1: 'SkillMaster', player2: 'TacticalPro', score: '3-0', status: 'finished' },
                    { player1: 'GoalMachine', player2: 'DefenderKing', score: 'vs', status: 'upcoming' },
                    { player1: 'SpeedStar', player2: 'PowerShot', score: 'vs', status: 'upcoming' }
                ]
            },
            {
                id: 'liga-elite-x1',
                name: 'Liga Elite X1',
                status: 'upcoming',
                startDate: '15 de Janeiro',
                duration: '4 semanas',
                registrations: 'Abertas',
                maxParticipants: 128,
                currentRegistrations: 87
            }
        ],
        coop: [
            {
                id: 'liga-premier-efps',
                name: 'Liga Premier EFPS',
                teams: [
                    { position: 1, name: 'Thunder FC', points: 45, games: 15, wins: 15, draws: 0, losses: 0 },
                    { position: 2, name: 'Elite Squad', points: 42, games: 15, wins: 14, draws: 0, losses: 1 },
                    { position: 3, name: 'Pro Legends', points: 38, games: 15, wins: 12, draws: 2, losses: 1 },
                    { position: 4, name: 'Victory United', points: 35, games: 15, wins: 11, draws: 2, losses: 2 },
                    { position: 5, name: 'Champions FC', points: 32, games: 15, wins: 10, draws: 2, losses: 3 }
                ]
            }
        ]
    },
    rankings: {
        overall: [
            { rank: 1, name: 'ChampionX1', points: 3120, avatar: 'https://via.placeholder.com/100x100', badges: ['champion', 'mvp'] },
            { rank: 2, name: 'ProGamer_02', points: 2850, avatar: 'https://via.placeholder.com/80x80', badges: ['finalist'] },
            { rank: 3, name: 'SkillMaster', points: 2720, avatar: 'https://via.placeholder.com/80x80', badges: ['puskas'] },
            { rank: 4, name: 'TacticalPro', points: 2650, avatar: 'https://via.placeholder.com/40x40', badges: [] },
            { rank: 5, name: 'GoalMachine', points: 2580, avatar: 'https://via.placeholder.com/40x40', badges: ['topscorer'] },
            { rank: 6, name: 'DefenderKing', points: 2520, avatar: 'https://via.placeholder.com/40x40', badges: [] },
            { rank: 7, name: 'SpeedStar', points: 2480, avatar: 'https://via.placeholder.com/40x40', badges: [] },
            { rank: 8, name: 'PowerShot', points: 2420, avatar: 'https://via.placeholder.com/40x40', badges: [] },
            { rank: 9, name: 'MidMaster', points: 2380, avatar: 'https://via.placeholder.com/40x40', badges: [] },
            { rank: 10, name: 'NewTalent', points: 2340, avatar: 'https://via.placeholder.com/40x40', badges: ['rookie'] }
        ],
        x1: [
            { rank: 1, name: 'ChampionX1', points: 3120, wins: 45, losses: 3 },
            { rank: 2, name: 'SkillMaster', points: 2720, wins: 38, losses: 7 },
            { rank: 3, name: 'TacticalPro', points: 2650, wins: 35, losses: 8 }
        ],
        coop: [
            { rank: 1, name: 'ProGamer_02', points: 2850, teamWins: 28, teamLosses: 5 },
            { rank: 2, name: 'GoalMachine', points: 2580, teamWins: 25, teamLosses: 8 },
            { rank: 3, name: 'DefenderKing', points: 2520, teamWins: 23, teamLosses: 10 }
        ]
    },
    awards: {
        2024: [
            { name: 'Bola de Ouro EFPS', winner: 'ChampionX1', description: 'Melhor jogador do ano', icon: 'trophy', color: 'golden' },
            { name: 'Prêmio Puskas', winner: 'SkillMaster', description: 'Melhor gol do ano', icon: 'futbol', color: 'silver' },
            { name: 'Revelação', winner: 'NewTalent', description: 'Melhor jogador novato', icon: 'star', color: 'bronze' },
            { name: 'Melhor Defensor', winner: 'DefenderKing', description: 'Defensor mais sólido', icon: 'shield', color: 'blue' },
            { name: 'Artilheiro', winner: 'GoalMachine', description: 'Maior goleador', icon: 'bullseye', color: 'red' },
            { name: 'Fair Play', winner: 'SportSpirit', description: 'Jogador mais esportivo', icon: 'handshake', color: 'green' }
        ]
    },
    stats: {
        server: {
            totalPlayers: 523,
            activeToday: 187,
            totalMatches: 1247,
            tournamentsCompleted: 52,
            onlineNow: 89,
            averageMatchTime: '12 min',
            topCountries: ['Brasil', 'Argentina', 'México', 'Colômbia', 'Chile']
        },
        live: {
            activeMatches: 12,
            playersOnline: 89,
            tournamentsRunning: 3,
            newRegistrations: 5
        }
    },
    news: [
        {
            id: 1,
            title: 'Copa EFPS 2024 entra nas Semifinais',
            summary: 'Apenas 4 jogadores restam na disputa pelo título mais prestigioso do servidor.',
            date: '2024-06-14',
            category: 'tournament',
            featured: true
        },
        {
            id: 2,
            title: 'Nova Liga Elite X1 abre inscrições',
            summary: 'Prepare-se para 4 semanas de competição intensa com os melhores jogadores.',
            date: '2024-06-13',
            category: 'announcement'
        },
        {
            id: 3,
            title: 'ChampionX1 mantém liderança no ranking',
            summary: 'Com 3.120 pontos, o atual campeão segue imbatível no topo.',
            date: '2024-06-12',
            category: 'ranking'
        }
    ]
};

// Função para atualizar dados em tempo real
function updateLiveStats() {
    const liveData = mockData.stats.live;
    
    // Simular mudanças nos dados
    liveData.playersOnline += Math.floor(Math.random() * 3) - 1;
    liveData.activeMatches += Math.floor(Math.random() * 2) - 1;
    liveData.newRegistrations += Math.floor(Math.random() * 2);
    
    // Garantir valores mínimos
    liveData.playersOnline = Math.max(50, liveData.playersOnline);
    liveData.activeMatches = Math.max(0, liveData.activeMatches);
    
    // Atualizar elementos na página
    const onlineElement = document.querySelector('.stat-content h3:contains("89")');
    if (onlineElement) {
        onlineElement.textContent = liveData.playersOnline;
    }
    
    // Atualizar indicador de atividade
    updateActivityIndicator();
}

// Função para mostrar indicador de atividade online
function updateActivityIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'live-indicator';
    indicator.innerHTML = '<span class="pulse"></span> AO VIVO';
    
    const header = document.querySelector('.header');
    if (header && !header.querySelector('.live-indicator')) {
        header.appendChild(indicator);
    }
}

// Função para carregar dados de ranking baseado na aba selecionada
function loadRankingData(category = 'overall') {
    const rankingData = mockData.rankings[category];
    const podiumContainer = document.querySelector('.ranking-podium');
    const listContainer = document.querySelector('.ranking-list');
    
    if (!rankingData || !podiumContainer || !listContainer) return;
    
    // Atualizar pódio (top 3)
    const podiumItems = podiumContainer.querySelectorAll('.podium-item');
    podiumItems.forEach((item, index) => {
        if (rankingData[index]) {
            const player = rankingData[index];
            const nameElement = item.querySelector('.podium-info h4');
            const pointsElement = item.querySelector('.podium-points');
            
            if (nameElement) nameElement.textContent = player.name;
            if (pointsElement) pointsElement.textContent = `${player.points} pts`;
        }
    });
    
    // Atualizar lista (4º em diante)
    listContainer.innerHTML = '';
    rankingData.slice(3, 10).forEach(player => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        item.innerHTML = `
            <span class="rank">${player.rank}</span>
            <div class="player-info">
                <img src="${player.avatar}" alt="${player.name}">
                <span class="player-name">${player.name}</span>
            </div>
            <span class="player-points">${player.points}</span>
        `;
        listContainer.appendChild(item);
    });
}

// Função para mostrar detalhes de torneio
function showTournamentDetails(tournamentId) {
    const tournament = mockData.tournaments.x1.find(t => t.id === tournamentId);
    if (!tournament) return;
    
    // Criar modal com detalhes
    const modal = document.createElement('div');
    modal.className = 'tournament-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${tournament.name}</h2>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                ${tournament.matches ? `
                    <h3>Próximas Partidas</h3>
                    <div class="matches-list">
                        ${tournament.matches.map(match => `
                            <div class="match-item ${match.status}">
                                <span class="player">${match.player1}</span>
                                <span class="score">${match.score}</span>
                                <span class="player">${match.player2}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                <div class="tournament-info-detailed">
                    <p><strong>Participantes:</strong> ${tournament.participants || tournament.maxParticipants}</p>
                    <p><strong>Formato:</strong> ${tournament.format || 'Liga'}</p>
                    <p><strong>Status:</strong> ${tournament.status === 'live' ? 'Em Andamento' : 'Próximo'}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fechar modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Função para simular notificações em tempo real
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'warning' ? 'exclamation' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 5000);
}

// Função para buscar jogadores
function searchPlayers(query) {
    const allPlayers = mockData.rankings.overall;
    return allPlayers.filter(player => 
        player.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Função para registrar em torneio
function registerForTournament(tournamentId) {
    const tournament = mockData.tournaments.x1.find(t => t.id === tournamentId);
    if (tournament && tournament.currentRegistrations < tournament.maxParticipants) {
        tournament.currentRegistrations++;
        showNotification('Registro realizado com sucesso!', 'success');
        
        // Atualizar UI
        const registrationBtn = document.querySelector(`[data-tournament="${tournamentId}"] .btn-outline`);
        if (registrationBtn) {
            registrationBtn.textContent = 'Registrado!';
            registrationBtn.disabled = true;
            registrationBtn.classList.add('registered');
        }
    } else {
        showNotification('Torneio lotado ou não encontrado!', 'warning');
    }
}

// Inicializar recursos dinâmicos
document.addEventListener('DOMContentLoaded', () => {
    // Atualizar dados a cada 30 segundos
    setInterval(updateLiveStats, 30000);
    
    // Carregar dados iniciais
    loadRankingData('overall');
    
    // Adicionar event listeners para tabs de ranking
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-tab');
            loadRankingData(category);
        });
    });
    
    // Adicionar event listeners para cards de torneio
    document.querySelectorAll('.tournament-card').forEach(card => {
        card.addEventListener('click', () => {
            const tournamentId = card.getAttribute('data-tournament') || 'copa-efps-2024';
            showTournamentDetails(tournamentId);
        });
    });
    
    // Simular notificações periódicas
    setInterval(() => {
        const notifications = [
            'Nova partida iniciada!',
            'Jogador subiu no ranking!',
            'Torneio em andamento!',
            'Novo recorde estabelecido!'
        ];
        const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
        if (Math.random() > 0.7) { // 30% de chance
            showNotification(randomNotification, 'info');
        }
    }, 60000); // A cada minuto
    
    // Adicionar indicador de atividade
    updateActivityIndicator();
    
    console.log('Recursos dinâmicos carregados com sucesso!');
});

// Exportar dados para uso global
window.efpsData = mockData;

