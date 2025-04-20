<script setup>
const { data: forumThreads } = await useFetch('/api/forum');

const formatDate = (timestamp) => {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-12 text-center">Community</h1>
    
    <section class="mb-16">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4">Discussion Forum</h2>
          <p class="text-gray-600 mb-6">
            Join the conversation about immigration rights and due process. Share your thoughts, experiences, and ideas for action.
          </p>
          
          <h3 class="text-xl font-bold mb-4">Recent Threads</h3>
          <div class="space-y-4">
            <div v-for="thread in forumThreads" :key="thread.id" class="border-b border-gray-200 pb-4">
              <div class="flex justify-between items-start">
                <h4 class="text-lg font-semibold">{{ thread.title }}</h4>
                <span class="text-sm text-gray-500">{{ formatDate(thread.timestamp) }}</span>
              </div>
              <p class="text-gray-600 mt-2">{{ thread.content }}</p>
              <div class="mt-2 text-sm text-gray-500">
                {{ thread.author }}
              </div>
            </div>
          </div>
          
          <div class="mt-6 flex justify-between">
            <a href="#" class="text-primary hover:text-primary-dark">
              View All Threads
            </a>
            <a href="mailto:forum@standagainstdeportation.org" class="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
              Join the Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="mb-16">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
          <p class="text-gray-600 mb-6">
            We need your help to make a difference. Sign up to volunteer for our campaigns, events, and advocacy efforts.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.google.com/volunteer-signup" target="_blank" class="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition text-center">
              Sign Up to Volunteer
            </a>
            <a href="mailto:volunteer@standagainstdeportation.org" class="inline-block px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition text-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-4">Share Our Message</h2>
          <p class="text-gray-600 mb-6">
            Help spread the word about our mission and the importance of due process in immigration.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://bsky.app" target="_blank" class="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
              Share on Bluesky
            </a>
            
            <a href="https://twitter.com" target="_blank" class="flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Share on X
            </a>
            
            <a href="https://facebook.com" target="_blank" class="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l-8 8m0-8l8 8" />
              </svg>
              Share on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
