<template>

  <div class="grid">
    <div v-for="sponsor in sponsors.list" :key="sponsor.user_id" class="card">
      <img :src="sponsor.avatar" :alt="sponsor.name" class="avatar">
      <div class="name">{{ sponsor.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Sponsor {
  user_id: string;
  name: string;
  avatar: string;
}

interface SponsorsData {
  list: Sponsor[];
}

import { onMounted, reactive } from 'vue';

// const apiURL = 'https://ifdian.net/api/creator/get-top-sponsors?user_id=cfa50e58bfd111ebb4e852540025c377';
const apiURL = '/sponsors'
const sponsors = reactive<SponsorsData>({ list: [] });

const fetchSponsors = async () => {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    sponsors.list = data.data.list;
  } catch (error) {
    console.error('Error fetching sponsors:', error);
  }
};

onMounted(fetchSponsors);
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding: 16px;
}

.card {
  width: 100%;
  backdrop-filter: blur(10px) ;
  border-radius: var(--radii-xl);
  border: 1px solid var(--elements-border-primary-static);
  border-radius: var(--radii-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  margin-top: 8px;
  font-size: 16px;
  color: #333;
}
</style>
