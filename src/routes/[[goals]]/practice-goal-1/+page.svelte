<script>
  import { WideSideBySide, TextBlock, TextEmphasis, Factoid, Supplementary, Subheader, Subheaderer } from '$lib/components';
  import DynamicScroller from '$lib/components/DynamicScroller.svelte';
  import VisContainer from '$lib/components/VisContainer.svelte';
  import RegionBeeswarmScroller from '$lib/components/goal01/RegionBeeswarmScroller.svelte';
  import PovertyLineScroller from '$lib/components/goal01/PovertyLineScroller.svelte';
  import PovertyLineRegionBeeswarm from '$lib/components/goal01/PovertyLineRegionBeeswarm.svelte';
  import PovertyClimateScroller from '$lib/components/goal01/PovertyClimateScroller.svelte';
  import PovertyProjectionLine from '$lib/components/goal01/PovertyProjectionLine.svelte';
  import { fade } from 'svelte/transition';

  export let data;
  console.log('data', data);
  const { goal01 } = data;
  const content = goal01.content;
  console.log('content', content);

  // Add this default value for dataDownloadUrl
  const defaultDataDownloadUrl = '#'; // or any appropriate default value

  let activeSceneIndex = 0;
  let progress = 0;
  let offset = 0;

  $: console.log('Content:', content);
</script>

<div class="practice-goal-1">
  {#each content as item, index}
    {#if item.type === 'text'}
      <TextBlock {...item} />
    {:else if item.type === 'wide_scroller' || item.type === 'scroller'}
      <WideSideBySide
        data={data[item.path.split('.').pop() + 'Data']}
        {...item}
        dataDownloadUrl={item.dataDownloadUrl || defaultDataDownloadUrl}
      >
        <svelte:fragment slot="graphic" let:activeScene let:parentWidth let:parentHeight>
          {#if item.graphic === 'region_beeswarm'}
            <RegionBeeswarmScroller {activeScene} {parentWidth} {parentHeight} data={data.regionBeeswarmData} />
          {:else if item.graphic === 'povertyline_scroller'}
            <PovertyLineScroller {activeScene} {parentWidth} {parentHeight} data={data.povertyLineData} />
          {:else if item.graphic === 'interactive_region_beeswarms' || item.graphic === 'demopage_static'}
            <PovertyLineRegionBeeswarm {activeScene} {parentWidth} {parentHeight} data={data.povertyLineData} />
          {:else if item.graphic === 'povertyclimatescroller'}
            <PovertyClimateScroller {activeScene} {parentWidth} {parentHeight} data={data.povertyClimateData} />
          {:else if item.graphic === 'povertyprojection'}
            <PovertyProjectionLine {activeScene} {parentWidth} {parentHeight} data={data.povertyProjectionData} />
          {:else}
            <div>Graphic placeholder for {item.graphic}</div>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="scenes" let:activeScene>
          {#each item.scenes as scene, sceneIndex}
            <div class="scene" class:active={sceneIndex === activeScene.index}>
              {#if sceneIndex === activeScene.index}
                <div transition:fade>
                  {@html scene.text}
                </div>
              {/if}
            </div>
          {/each}
        </svelte:fragment>
      </WideSideBySide>
    {:else if item.type === 'text_emphasis'}
      <TextEmphasis {...item} />
    {:else if item.type === 'subhed'}
      <Subheader {...item} />
    {:else if item.type === 'subhed2'}
      <Subheaderer {...item} />
    {:else if item.type === 'factoid'}
      <Factoid {...item} />
    {:else if item.type === 'supplementary'}
      <Supplementary {...item} />
    {/if}
  {/each}
</div>

<style>
  :global(.side-by-side) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }

  .practice-goal-1 {
    padding: 20px;
  }

  .text-content,
  .text-emphasis {
    max-width: 800px;
    margin: 0 auto 20px;
  }

  .text-emphasis {
    font-weight: bold;
    font-size: 1.2em;
  }

  .scene {
    margin-bottom: 10px;
  }

  .practice-goal-1 > :global(*) {
    margin-bottom: 2rem;
  }

  .practice-goal-1 > :global(.side-by-side) {
    margin-bottom: 0;
  }

  .scene {
    opacity: 0;
    transition: opacity 0.3s ease;
    margin-bottom: 50vh; /* Adjust this value to control the space between scenes */
  }

  .scene.active {
    opacity: 1;
  }

  .scene:last-child {
    margin-bottom: 100vh; /* Ensure there's enough space to scroll past the last scene */
  }
</style>
