// Dados atualizados da Copa do Mundo 2026 - 24 de junho de 2026
// Fonte: CNN Brasil, BBC Portugal, ESPN

const FALLBACK_GROUPS_ATUALIZADO = {
  // Grupo A - México lidera com 100% de aproveitamento
  A: [
    {f: '🇲🇽', n: 'México', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 3, gc: 0, sg: 3, cl: 'g'},
    {f: '🇰🇷', n: 'Coreia do Sul', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇨🇿', n: 'Rep. Tcheca', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 2, sg: -1, cl: 'n'},
    {f: '🇿🇦', n: 'África do Sul', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 0, gc: 2, sg: -2, cl: 'n'}
  ],
  
  // Grupo B - Canadá e Suíça empatados em pontos
  B: [
    {f: '🇨🇦', n: 'Canadá', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 7, gc: 1, sg: 6, cl: 'g'},
    {f: '🇨🇭', n: 'Suíça', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 5, gc: 2, sg: 3, cl: 'g'},
    {f: '🇧🇦', n: 'Bósnia e Herzegovina', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 2, gc: 5, sg: -3, cl: 'n'},
    {f: '🇶🇦', n: 'Catar', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 7, sg: -6, cl: 'n'}
  ],
  
  // Grupo C - Brasil e Marrocos empatados em pontos
  C: [
    {f: '🇧🇷', n: 'Brasil', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 1, sg: 3, cl: 'g'},
    {f: '🇲🇦', n: 'Marrocos', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 2, gc: 1, sg: 1, cl: 'g'},
    {f: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', n: 'Escócia', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 1, gc: 1, sg: 0, cl: 'n'},
    {f: '🇭🇹', n: 'Haiti', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 0, gc: 4, sg: -4, cl: 'e'}
  ],
  
  // Grupo D - EUA lidera com 100% de aproveitamento
  D: [
    {f: '🇺🇸', n: 'EUA', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 6, gc: 1, sg: 5, cl: 'g'},
    {f: '🇦🇺', n: 'Austrália', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇵🇾', n: 'Paraguai', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 4, sg: -2, cl: 'n'},
    {f: '🇹🇷', n: 'Turquia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 0, gc: 3, sg: -3, cl: 'e'}
  ],
  
  // Grupo E - Alemanha lidera com 100% de aproveitamento
  E: [
    {f: '🇩🇪', n: 'Alemanha', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 9, gc: 2, sg: 7, cl: 'g'},
    {f: '🇨🇮', n: 'Costa do Marfim', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇪🇨', n: 'Equador', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 0, gc: 1, sg: -1, cl: 'n'},
    {f: '🇨🇼', n: 'Curaçau', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 7, sg: -6, cl: 'n'}
  ],
  
  // Grupo F - Holanda e Japão empatados em pontos
  F: [
    {f: '🇳🇱', n: 'Holanda', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 7, gc: 3, sg: 4, cl: 'g'},
    {f: '🇯🇵', n: 'Japão', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 6, gc: 2, sg: 4, cl: 'g'},
    {f: '🇸🇪', n: 'Suécia', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 6, gc: 6, sg: 0, cl: 'n'},
    {f: '🇹🇳', n: 'Tunísia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 9, sg: -8, cl: 'e'}
  ],
  
  // Grupo G - Egito lidera
  G: [
    {f: '🇪🇬', n: 'Egito', pts: 4, j: 2, v: 1, e: 1, d: 0, gp: 4, gc: 2, sg: 2, cl: 'g'},
    {f: '🇮🇷', n: 'Irã', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇧🇪', n: 'Bélgica', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 1, gc: 1, sg: 0, cl: 'n'},
    {f: '🇳🇿', n: 'Nova Zelândia', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 3, gc: 5, sg: -2, cl: 'n'}
  ],
  
  // Grupo H - Espanha lidera com 100% de aproveitamento
  H: [
    {f: '🇪🇸', n: 'Espanha', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 4, gc: 0, sg: 4, cl: 'g'},
    {f: '🇺🇾', n: 'Uruguai', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 3, gc: 3, sg: 0, cl: 'n'},
    {f: '🇨🇻', n: 'Cabo Verde', pts: 2, j: 2, v: 0, e: 2, d: 0, gp: 2, gc: 2, sg: 0, cl: 'n'},
    {f: '🇸🇦', n: 'Arábia Saudita', pts: 1, j: 2, v: 0, e: 1, d: 1, gp: 1, gc: 5, sg: -4, cl: 'n'}
  ],
  
  // Grupo I - Noruega lidera com 100% de aproveitamento
  I: [
    {f: '🇳🇴', n: 'Noruega', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 4, gc: 1, sg: 3, cl: 'g'},
    {f: '🇫🇷', n: 'França', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 3, gc: 1, sg: 2, cl: 'n'},
    {f: '🇸🇳', n: 'Senegal', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 3, sg: -2, cl: 'e'},
    {f: '🇮🇶', n: 'Iraque', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 4, sg: -3, cl: 'e'}
  ],
  
  // Grupo J - Argentina lidera
  J: [
    {f: '🇦🇷', n: 'Argentina', pts: 6, j: 2, v: 2, e: 0, d: 0, gp: 4, gc: 0, sg: 4, cl: 'g'},
    {f: '🇦🇹', n: 'Áustria', pts: 3, j: 2, v: 1, e: 0, d: 1, gp: 3, gc: 2, sg: 1, cl: 'n'},
    {f: '🇯🇴', n: 'Jordânia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 1, gc: 3, sg: -2, cl: 'e'},
    {f: '🇩🇿', n: 'Argélia', pts: 0, j: 2, v: 0, e: 0, d: 2, gp: 0, gc: 3, sg: -3, cl: 'e'}
  ],
  
  // Grupo K - Colômbia lidera
  K: [
    {f: '🇨🇴', n: 'Colômbia', pts: 3, j: 1, v: 1, e: 0, d: 0, gp: 3, gc: 1, sg: 2, cl: 'n'},
    {f: '🇵🇹', n: 'Portugal', pts: 1, j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, cl: 'n'},
    {f: '🇨🇩', n: 'RD Congo', pts: 1, j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, cl: 'n'},
    {f: '🇺🇿', n: 'Uzbequistão', pts: 0, j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 3, sg: -2, cl: 'e'}
  ],
  
  // Grupo L - Inglaterra e Gana empatados em pontos
  L: [
    {f: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', n: 'Inglaterra', pts: 3, j: 1, v: 1, e: 0, d: 0, gp: 4, gc: 2, sg: 2, cl: 'n'},
    {f: '🇬🇭', n: 'Gana', pts: 3, j: 1, v: 1, e: 0, d: 0, gp: 1, gc: 0, sg: 1, cl: 'n'},
    {f: '🇵🇦', n: 'Panamá', pts: 0, j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 1, sg: -1, cl: 'e'},
    {f: '🇭🇷', n: 'Croácia', pts: 0, j: 1, v: 0, e: 0, d: 1, gp: 2, gc: 4, sg: -2, cl: 'e'}
  ]
};

// Artilheiros atualizados da Copa 2026
const FALLBACK_SCORERS_ATUALIZADO = [
  {name: 'Kylian Mbappé', team: 'França', flag: '🇫🇷', goals: 4, assists: 2},
  {name: 'Erling Haaland', team: 'Noruega', flag: '🇳🇴', goals: 3, assists: 1},
  {name: 'Julián Álvarez', team: 'Argentina', flag: '🇦🇷', goals: 3, assists: 1},
  {name: 'Vinícius Júnior', team: 'Brasil', flag: '🇧🇷', goals: 2, assists: 3},
  {name: 'Harry Kane', team: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 2, assists: 0},
  {name: 'Jamal Musiala', team: 'Alemanha', flag: '🇩🇪', goals: 2, assists: 1},
  {name: 'Lamine Yamal', team: 'Espanha', flag: '🇪🇸', goals: 2, assists: 1},
  {name: 'Rodrygo', team: 'Brasil', flag: '🇧🇷', goals: 1, assists: 2}
];

// Últimos resultados da Copa 2026
const ULTIMOS_RESULTADOS = [
  {data: '24/06', grupo: 'Grupo A', time1: '🇲🇽 México', score1: 1, score2: 0, time2: '🇰🇷 Coreia do Sul', status: 'Encerrado'},
  {data: '24/06', grupo: 'Grupo A', time1: '🇨🇿 Rep. Tcheca', score1: 0, score2: 0, time2: '🇿🇦 África do Sul', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo J', time1: '🇦🇷 Argentina', score1: 1, score2: 0, time2: '🇦🇹 Áustria', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo K', time1: '🇨🇴 Colômbia', score1: 3, score2: 1, time2: '🇨🇩 RD Congo', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo L', time1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', score1: 4, score2: 2, time2: '🇵🇦 Panamá', status: 'Encerrado'},
  {data: '23/06', grupo: 'Grupo L', time1: '🇬🇭 Gana', score1: 1, score2: 2, time2: '🇭🇷 Croácia', status: 'Encerrado'},
  {data: '22/06', grupo: 'Grupo I', time1: '🇫🇷 França', score1: 3, score2: 0, time2: '🇮🇶 Iraque', status: 'Encerrado'},
  {data: '22/06', grupo: 'Grupo I', time1: '🇳🇴 Noruega', score1: 4, score2: 1, time2: '🇸🇳 Senegal', status: 'Encerrado'}
];

// Próximos jogos da Copa 2026
const PROXIMOS_JOGOS = [
  {data: '25/06', hora: '17:00', grupo: 'Grupo E', time1: '🇨🇼 Curaçau', time2: '🇨🇮 Costa do Marfim', local: 'Lincoln Financial Field'},
  {data: '25/06', hora: '17:00', grupo: 'Grupo E', time1: '🇪🇨 Equador', time2: '🇩🇪 Alemanha', local: 'MetLife Stadium'},
  {data: '25/06', hora: '20:00', grupo: 'Grupo F', time1: '🇹🇳 Tunísia', time2: '🇳🇱 Holanda', local: 'Arrowhead Stadium'},
  {data: '25/06', hora: '20:00', grupo: 'Grupo F', time1: '🇯🇵 Japão', time2: '🇸🇪 Suécia', local: 'AT&T Stadium'},
  {data: '25/06', hora: '23:00', grupo: 'Grupo D', time1: '🇵🇾 Paraguai', time2: '🇦🇺 Austrália', local: 'Levi\'s Stadium'},
  {data: '25/06', hora: '23:00', grupo: 'Grupo D', time1: '🇹🇷 Turquia', time2: '🇺🇸 EUA', local: 'SoFi Stadium'}
];

// Estatísticas gerais da Copa
const STATS_GERAIS = {
  melhoresAtaques: [
    {time: 'Alemanha', gols: 9},
    {time: 'Holanda', gols: 7},
    {time: 'Canadá', gols: 7},
    {time: 'Brasil', gols: 4},
    {time: 'França', gols: 3}
  ],
  melhoresDefesas: [
    {time: 'México', gols: 0},
    {time: 'Espanha', gols: 0},
    {time: 'Argentina', gols: 0},
    {time: 'Alemanha', gols: 2},
    {time: 'Canadá', gols: 1}
  ],
  cartoes: [
    {time: 'Marrocos', cartoes: 11},
    {time: 'Uruguai', cartoes: 10},
    {time: 'México', cartoes: 9},
    {time: 'Sérvia', cartoes: 8},
    {time: 'Holanda', cartoes: 7}
  ]
};
