import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { profile } from '@/data/profile'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { GlassCard } from '@/components/GlassCard'

export function StatsRow() {
  return (
    <Grid container spacing={2}>
      {profile.stats.map((stat, index) => (
        <Grid key={stat.label} size={{ xs: 6, sm: 4 }}>
          <RevealOnScroll delay={index * 0.06}>
            <GlassCard sx={{ p: 2.5, textAlign: 'center', height: '100%' }}>
              <Typography
                variant="h4"
                sx={{ color: 'primary.light', fontWeight: 700, mb: 0.5, fontVariantNumeric: 'tabular-nums' }}
              >
                {stat.value !== null ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : stat.display}
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
