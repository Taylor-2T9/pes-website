import { Router } from '@/interfaces/pages/home'
import { DataCollections } from "../api/data"

export interface SectionProps {
    router: Router,
    data: DataCollections,
    type: 'table' | 'top3'
}