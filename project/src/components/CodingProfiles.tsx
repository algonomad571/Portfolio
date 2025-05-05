import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useQuery } from 'react-query';
import { Code2, Trophy, Star, Users } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contestRating: 1742;
}

interface CodeforcesStats {
  handle: string;
  rating: number;
  rank: string;
  maxRating: number;
  maxRank: string;
  contribution: number;
}

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { data: leetcodeStats, isLoading: leetcodeLoading } = useQuery<LeetCodeStats>(
    'leetcode',
    async () => {
      const response = await fetch('https://leetcode-stats-api.herokuapp.com/Algonomad571');
      const data = await response.json();
  
      return {
        ...data,
        contestRating: 1742
      };
    }
  );
  

  const { data: codeforcesStats, isLoading: codeforcesLoading } = useQuery<CodeforcesStats>(
    'codeforces',
    async () => {
      const response = await fetch('https://codeforces.com/api/user.info?handles=muskan1705');
      const data = await response.json();
      return data.result[0];
    }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="coding-profiles" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-title mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Coding Profiles
          </motion.h2>
          <motion.p 
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track my progress and achievements on competitive programming platforms.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* LeetCode Stats */}
          <motion.div variants={itemVariants} className="glassmorphism p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <Code2 className="w-6 h-6 text-primary mr-2" />
                LeetCode
              </h3>
              {!leetcodeLoading && leetcodeStats && (
                <span className="text-sm font-mono text-white/50">
                  Rank: #{leetcodeStats.ranking}
                </span>
              )}
            </div>
            
            {leetcodeLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>
            ) : leetcodeStats && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-success">{leetcodeStats.easySolved}</div>
                    <div className="text-xs text-white/50">Easy</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-warning">{leetcodeStats.mediumSolved}</div>
                    <div className="text-xs text-white/50">Medium</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-error">{leetcodeStats.hardSolved}</div>
                    <div className="text-xs text-white/50">Hard</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-white/70">Total Solved</span>
                  <span className="font-bold">{leetcodeStats.totalSolved}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-white/70">Contest Rating</span>
                  <span className="font-bold">{leetcodeStats.contestRating}</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Codeforces Stats */}
          <motion.div variants={itemVariants} className="glassmorphism p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <Trophy className="w-6 h-6 text-secondary mr-2" />
                Codeforces
              </h3>
              {!codeforcesLoading && codeforcesStats && (
                <span className="text-sm font-mono text-white/50">
                  {codeforcesStats.rank}
                </span>
              )}
            </div>
            
            {codeforcesLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>
            ) : codeforcesStats && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-primary">{codeforcesStats.rating}</div>
                    <div className="text-xs text-white/50">Current Rating</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <div className="text-2xl font-bold text-secondary">{codeforcesStats.maxRating}</div>
                    <div className="text-xs text-white/50">Max Rating</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-white/70">Max Rank</span>
                  <span className="font-bold">{codeforcesStats.maxRank}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-white/70">Contribution</span>
                  <span className="font-bold">{codeforcesStats.contribution}</span>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;