import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { profile } from '@/data/profile'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { GlassCard } from '@/components/GlassCard'

export function StatsRow() {
  return (
    <Grid container spacing={2}>
      {profile.stats.map((stat, index) => (
        <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
          <RevealOnScroll delay={index * 0.08}>
            <GlassCard sx={{ p: 2.5, textAlign: 'center', height: '100%' }}>
              <Typography
                variant="h4"
                sx={{ color: 'primary.light', fontWeight: 700, mb: 0.5 }}
              >
                {stat.value}
              </Typography>
              <Typography variant="caption" sx={{ display: 'block' }}>
                {stat.label}
              </Typography>
            </GlassCard>
          </RevealOnScroll>
        </Grid>
      ))}
    </Grid>
  )
}
